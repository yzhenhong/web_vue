import { RouteRecordRaw } from "vue-router";

const pcRoutes: Array<RouteRecordRaw> = [
  {
    path: "/example",
    name: "example",
    redirect: "/example-list",
    component: () =>
      import(/* webpackChunkName: "example" */ "@/components/layout/index.vue"),
    meta: {},
    children: [
      {
        path: "/example/list",
        name: "example-list",
        component: () =>
          import(
            /* webpackChunkName: "example" */ "@/views/example/list/index.vue"
          ),
        meta: {
          title: "list",
        },
      },
      {
        path: "/example/form",
        name: "example-form",
        component: () =>
          import(
            /* webpackChunkName: "example" */ "@/views/example/form/index.vue"
          ),
        meta: {
          title: "form",
        },
      },
      {
        path: "/example/mapbox",
        name: "example-mapbox",
        component: () =>
          import(
            /* webpackChunkName: "example" */ "@/views/example/mapbox/index.vue"
          ),
        meta: {
          title: "mapbox",
        },
      },
      {
        path: "/example/echarts",
        name: "example-echarts",
        component: () =>
          import(
            /* webpackChunkName: "example" */ "@/views/example/echarts/index.vue"
          ),
        meta: {
          title: "echarts",
        },
      },
      {
        path: "/example/worker",
        name: "example-worker",
        component: () =>
          import(
            /* webpackChunkName: "example" */ "@/views/example/worker/index.vue"
          ),
        meta: {
          title: "worker",
        },
      },
      {
        path: "/example/indexDB",
        name: "example-indexDB",
        component: () =>
          import(
            /* webpackChunkName: "example" */ "@/views/example/indexDB/index.vue"
          ),
        meta: {
          title: "indexDB",
        },
      },
      {
        path: "/example/yoha",
        name: "example-yoha",
        component: () =>
          import(
            /* webpackChunkName: "example" */ "@/views/example/yoha/index.vue"
          ),
        meta: {
          title: "yoha",
        },
      },
    ],
  },
];

export default pcRoutes;
