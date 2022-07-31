import { computed } from "vue";
import { useStore } from "vuex";

// 组合mapState和mapGetters: mapper传入的, mapFn是使用的map方法
export default function (mapper: any, mapFn: any) {
  // 拿到store对象
  const store = useStore();
  // 获取到对应的对象的function
  const storeDataFns = mapFn(mapper);
  // 这些对应的是一个个对象， 函数
  // 对数据进行转换 {key: ref}
  const storeData: any = {};
  // 使用Object.keys获取storeDataFns的key值
  // 在使用forEach遍历每一个key
  Object.keys(storeDataFns).forEach((fnkey) => {
    // 取出storeDataFns中的函数，调用函数的bind绑定一个this，fn就有了this，
    // 这个this必须是个对象，且需要有$store属性，且需要个值
    const fn = storeDataFns[fnkey].bind({ $store: store });
    // 取出的函数用computed包裹，根据key重新赋值给storeGetters
    storeData[fnkey] = computed(fn);
  });
  return storeData;
}
