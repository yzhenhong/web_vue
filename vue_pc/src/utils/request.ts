import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
// 格式化表单数据的插件
// import qs from "qs";
import { ElMessage } from "element-plus";
import { getToken, userToken } from "@/utils/auth";

// 接口错误提示
const networkMessage: Record<number, string> = {
  401: "抱歉，身份验证失败，请刷新页面或重新登录!",
  403: "抱歉，您没有权限访问该接口",
  404: "接口不存在，请联系开发人员",
  500: "服务器内部错误，请重试",
  502: "网关错误，请重试",
};
const timeoutMessage = "请求超时，请检查重试";
const defaultMessage = "接口返回错误，请检查重试";

// create an axios instance
const request: AxiosInstance = Axios.create({
  baseURL: "/",
  timeout: 15000,
});

// request interceptor
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = {};
    const token = getToken();
    if (token) {
      config.headers[userToken] = token;
    }
    // console.log("request-config", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// respone interceptor
request.interceptors.response.use(
  (response: AxiosResponse) => {
    // console.log("response", response);
    const status = response.status;
    const { code, message, data } = response.data;
    switch (status) {
      case 200: {
        if (code === 0) {
          return Promise.resolve(data);
        }
        if (!data) {
          ElMessage.error(defaultMessage);
          return Promise.reject(data);
        }
        if (code !== 0) {
          ElMessage.error(message);
          return Promise.reject(data);
        }
        return Promise.reject(response);
      }
      default: {
        const message = networkMessage[status];
        ElMessage.error(message);
        return Promise.reject(response);
      }
    }
  },
  (error) => {
    if (error.message.includes("timeout")) {
      // 判断请求异常信息中是否含有超时timeout字符串
      ElMessage.error(timeoutMessage);
    }
    return Promise.reject(error);

    /*
    // 重发流程
    const config = error.config;
    // 检测是否配置重发参数
    if (!config || !config.retry) return Promise.reject(error);
    // 获取/初始化追踪重试次数的变量
    config.__retryCount = config.__retryCount || 0;
    // 检查是否已经达到重试总数
    if (config.__retryCount >= config.retry) return Promise.reject(error);

    // ----------------- 重连逻辑 -----------------
    // 重试次数 + 1
    config.__retryCount += 1;
    // 自动计算每次重试的延时，重试次数越多，延时越大
    const delay = (1 / 2) * (Math.pow(2, config.__retryCount) - 1) * 1000;
    // 创建新的 Promise 来发起请求
    const backoff = new Promise((resolve) => {
      setTimeout(() => {
        resolve(config);
      }, delay);
    });

    // 返回新的 axios 请求结果
    return backoff.then(function () {
      config.data = qs.parse(config.data); // 设置并格式化传输的数据,因为全局设置了拦截前参数序列化 再次请求前必须反序列
      return request(config);
    });
    */
  }
);

export default request;
