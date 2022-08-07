import { defineAsyncComponent } from "vue";

const HeadBar = defineAsyncComponent(() => import("@/components/head-bar.vue"));

export default {
  install: (app: any) => {
    app.component("head-bar", HeadBar);
  },
};
