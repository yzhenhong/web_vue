<template>
  <div class="mobile-tabbar">
    <div
      class="tabbar-item"
      :class="active === 'home' ? 'active' : ''"
      @click="tabbar('home', '/home/index')"
    >
      <div>
        <van-icon name="wap-home-o" />
      </div>
      <div>首页</div>
    </div>
    <div
      class="tabbar-item"
      :class="active === 'my' ? 'active' : ''"
      @click="tabbar('my', '/my/index')"
    >
      <div>
        <van-icon name="user-circle-o" />
      </div>
      <div>我的</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "mobileTabbar",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const active = ref<string>("home");
    const tabbar = (res: string, path: string) => {
      active.value = res;
      router.push(path);
    };
    watch(
      route,
      (route) => {
        try {
          const routePath = route.path;
          // const lastPath = routePath.substring(routePath.lastIndexOf("/") + 1);
          // switch (lastPath) {
          //   case "home":
          //     active.value = "home";
          //     break;
          //   case "my":
          //     active.value = "my";
          //     break;
          //   default:
          //     break;
          // }
          switch (routePath) {
            case "/home/index":
              active.value = "home";
              break;
            case "/my/index":
              active.value = "my";
              break;
            default:
              break;
          }
        } catch (err) {
          console.log(err);
        }
      },
      { immediate: true }
    );
    return {
      active,
      tabbar,
    };
  },
});
</script>

<style scoped lang="less">
.mobile-tabbar {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 0.45rem;
  background: #ffffff;
  z-index: 100;
  box-shadow: 0 0.06rem 0.16rem 0 rgba(0, 0, 0, 0.08);
  display: flex;
  .tabbar-item {
    font-size: 0.14rem;
    height: 100%;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    cursor: pointer;
    > div {
      width: 100%;
      display: flex;
      justify-content: center;
      i {
        font-size: 0.18rem;
      }
    }
    &.active {
      color: #1989fa;
    }
  }
}
</style>
