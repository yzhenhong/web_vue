"use strict";
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
const ip = "http://localhost:3000/";
const port = process.env.port || process.env.npm_config_port || 80;

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 基本路径
  publicPath: "/",
  // 静态资源 (js、css、img、fonts) 的目录
  assetsDir: "static",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  // lintOnSave: false,
  lintOnSave: process.env.NODE_ENV === "development",
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 文件hash
  filenameHashing: true,
  // 所有 webpack-dev-server 的选项都支持
  devServer: {
    open: false,
    port,
    proxy: {
      "/api": {
        target: ip,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/v1",
        },
      },
      "/files": {
        target: ip,
        changeOrigin: true,
      },
      "/socket.io": {
        target: ip, // target host
        changeOrigin: true, // needed for virtual hosted sites
        ws: true,
        logLevel: "debug",
      },
    },
  },
  // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
  chainWebpack: (config) => {
    // pug
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-html-loader")
      .loader("pug-html-loader")
      .end();
    // worker
    config.module
      .rule("worker-loader")
      .test(/\.worker\.js$/)
      .use({
        loader: "worker-loader",
        options: {
          inline: true,
        },
      })
      .loader("worker-loader")
      .end();
    // config.module
    //   .rule("worker")
    //   .test(/\.worker\.ts$/)
    //   .use("worker-loader")
    //   .loader("worker-loader")
    //   .options({
    //     inline: "fallback",
    //   });
    // // 解决：worker 热更新问题
    // config.module.rule("ts").exclude.add(/\.worker\.ts$/);
    // // 解决：“window is undefined”报错，这个是因为worker线程中不存在window对象，因此不能直接使用，要用this代替
    // config.output.globalObject("this");
  },
  //
  configureWebpack: {
    plugins: [require("unplugin-vue-define-options/webpack")()],
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    externals: {},
  },
  // 可以用来传递任何第三方插件选项
  pluginOptions: {},
  // css样式预编译器等相关配置
  css: {
    loaderOptions: {
      less: {
        // 全局变量
        additionalData: `@import "@/assets/css/common.less";`,
      },
    },
  },
});
