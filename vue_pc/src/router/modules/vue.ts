import { RouteRecordRaw } from "vue-router";

const vueRoutes: Array<RouteRecordRaw> = [
  {
    path: "/vue",
    name: "vue",
    redirect: "/vue/slot",
    component: () =>
      import(/* webpackChunkName: "vue" */ "@/components/layout/index.vue"),
    meta: {},
    children: [
      {
        path: "/vue/slot",
        name: "vue-slot",
        component: () =>
          import(/* webpackChunkName: "vue" */ "@/views/vue/slot/index.vue"),
        meta: {
          title: "slot",
        },
      },
      {
        path: "/vue/teleport",
        name: "vue-teleport",
        component: () =>
          import(
            /* webpackChunkName: "vue" */ "@/views/vue/teleport/index.vue"
          ),
        meta: {
          title: "teleport",
        },
      },
      {
        path: "/vue/vuex",
        name: "vue-vuex",
        component: () =>
          import(/* webpackChunkName: "vue" */ "@/views/vue/vuex/index.vue"),
        meta: {
          title: "vuex",
        },
      },
      {
        path: "/vue/suspense",
        name: "vue-suspense",
        component: () =>
          import(
            /* webpackChunkName: "vue" */ "@/views/vue/suspense/index.vue"
          ),
        meta: {
          title: "suspense",
        },
      },
      {
        path: "/vue/router",
        name: "vue-router",
        component: () =>
          import(/* webpackChunkName: "vue" */ "@/views/vue/router/index.vue"),
        meta: {
          title: "router",
        },
      },
      {
        path: "/vue/render",
        name: "vue-render",
        component: () =>
          import(/* webpackChunkName: "vue" */ "@/views/vue/render/index.vue"),
        meta: {
          title: "render",
        },
      },
    ],
  },
];

export default vueRoutes;
