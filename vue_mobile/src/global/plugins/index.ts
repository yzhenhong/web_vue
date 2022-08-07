import request from "@/utils/request";
import * as echarts from "echarts";

export default {
  install: (app: any) => {
    app.config.globalProperties.$ajax = request;
    app.config.globalProperties.$echarts = echarts;
  },
};
