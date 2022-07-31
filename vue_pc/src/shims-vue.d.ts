/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare module '*.ts'
declare module "worker-loader!@/views/example/worker/workers/worker";
declare module "worker-loader!@/views/example/worker/workers/test";
