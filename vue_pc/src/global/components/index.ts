import { defineAsyncComponent } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const DynamicList = defineAsyncComponent(
  () => import("@/components/common/dynamic-list.vue")
);

const DynamicForm = defineAsyncComponent(
  () => import("@/components/common/dynamic-form.vue")
);

export default {
  install: (app: any) => {
    app.component("dynamic-list", DynamicList);
    app.component("dynamic-form", DynamicForm);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
