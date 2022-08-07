import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import commonRoutes from "./modules/common";
import homeRoutes from "./modules/home";
import myRoutes from "./modules/my";
// import mobileRoutes from "./modules/index";

const routes: Array<RouteRecordRaw> = [
  ...commonRoutes,
  ...homeRoutes,
  ...myRoutes,
];

// 尝试使用环境变量，否则使用根路径
const BASE_URL = process.env.BASE_URL || "/";

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
