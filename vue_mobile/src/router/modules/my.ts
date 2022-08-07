import { RouteRecordRaw } from "vue-router";

const myRoutes: Array<RouteRecordRaw> = [
  {
    path: "/my",
    name: "my",
    redirect: "/my/index",
    component: function () {
      return Promise.resolve().then(function () {
        return require(/* webpackChunkName: "my" */ "@/components/layout/index.vue");
      });
    },
    meta: {},
    children: [
      {
        path: "/my/index",
        name: "my-index",
        component: () =>
          import(/* webpackChunkName: "my" */ "@/views/my/index.vue"),
        meta: {
          title: "我的",
        },
      },
    ],
  },
];

export default myRoutes;
