// 移动端适配,px转换rem
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 100, // 指定转换倍率，我现在设置这个表示1rem=100px;
      propList: ["*"], // 属性列表，表示你要把哪些css属性的px转换成rem，这个*表示所有
      selectorBlackList: [".van"], // 匹配不被转换为rem的选择器
      mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
      minPixelValue: 1, // 需要转换的最小值，一般1px像素不转换，以上才转换
      unitPrecision: 4, // 转换成rem单位的小数点后的保留位数
    },
  },
};
