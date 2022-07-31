import { RouteRecordRaw } from "vue-router";

const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    redirect: "/home/index",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/components/layout/index.vue"),
    meta: {},
    children: [
      {
        path: "/home/index",
        name: "home-index",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/home/index.vue"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
];

export default homeRoutes;
