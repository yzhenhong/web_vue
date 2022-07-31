interface userInter {
  name: string;
  age: number | string;
  userInfo: object;
}
const state: userInter = {
  name: "yzh",
  age: 25,
  userInfo: {
    name: "yang",
    age: 18,
  },
};

const user = {
  namespaced: true,
  state,
  getters: {
    gettersName: (state: any) => state.name,
  },
  mutations: {
    SET_USERINFO: (state: any, userInfo: object): void => {
      state.userInfo = userInfo;
    },
  },
  actions: {
    setUserInfo: ({ commit }: any, userInfo: object): void => {
      commit("SET_USERINFO", userInfo);
    },
  },
};

export default user;
