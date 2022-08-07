import { RouteRecordRaw } from "vue-router";

const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "default",
    redirect: "/home",
    meta: {
      parentType: "common",
    },
  },
  {
    path: "/login",
    name: "login",
    meta: {
      parentType: "common",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/common/login/index.vue"),
  },
  {
    path: "/error",
    name: "error",
    meta: {
      parentType: "common",
    },
    component: () =>
      import(/* webpackChunkName: "error" */ "@/views/common/error/index.vue"),
  },
];

export default commonRoutes;
