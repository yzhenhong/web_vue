// 0 = off, 1 = warn, 2 = error
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],
    // 使用单引号
    // quotes: ["error", "single"],
    "prettier/prettier": [
      "off",
      {
        endOfLine: "auto", // crlf auto lf
      },
    ],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
    /*
      解决单个单词时会出现文件名校验的错误:
      在组件命名的时候不够规范，根据 ESLint 官方风格指南，除了根组件（App.vue）外，自定义组
      件名称应该由多单词组成（使用大驼峰命名方式或者用“-”连接单词），防止和 html 标签冲突;
    */
    {
      files: ["src/**/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
  ],
};
