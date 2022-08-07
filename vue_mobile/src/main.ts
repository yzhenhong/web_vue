import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./router/permission";
// Vant ui
import Vant from "vant";
// import "vant/lib/index.css";
import "@/assets/css/vant.css";
// mapbox
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
// components
import components from "./global/components/index";
// plugins
import plugins from "./global/plugins/index";
// mock
if (process.env.NODE_ENV === "development") {
  require("@/mock/index.ts");
}

const app = createApp(App);

components.install(app);
plugins.install(app);

app.use(store).use(router).use(Vant).mount("#app");
