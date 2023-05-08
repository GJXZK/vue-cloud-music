import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  isLogin: false,
};
// s创建Store对象
const store = new Vuex.Store({
  state,
  mutations: {
    updataLoginState(state, flag = false) {
      state.isLogin = flag;
    },
  },
});

export default store;
