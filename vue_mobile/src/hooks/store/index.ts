import { mapGetters, mapState, createNamespacedHelpers } from "vuex";
import useMapper from "./useMapper";

// 获取对应namespaced的state值
export function useModuleState(moduleName: any, mapper: any) {
  let mapperFn = mapState;
  // 判断传入的模块名是否是String类型，且长度不为0
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn);
}

// 获取对应namespaced的getters值
export function useModuleGetters(moduleName: any, mapper: any) {
  let mapperFn = mapGetters;
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn);
}

// 获取全局的getters值
export function useGetters(mapper: any) {
  const mapperFn = mapGetters;
  return useMapper(mapper, mapperFn);
}
