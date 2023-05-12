import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  // 用户数据
  isLogin: false,
  // 歌曲数据
  musicInfo: {},
  musicUrl: "", //歌曲url
  musicId: "", //歌曲Id
  playState: false, //歌曲播放状态
  // 实时播放时长 由audio中获取 用于进度条和歌词滚动
  currentTime: 0,
};
// 创建Store对象
const store = new Vuex.Store({
  state,
  mutations: {
    updataLoginState(state, flag = false) {
      state.isLogin = flag;
    },
    updataMusicId(state, value) {
      state.musicId = value;
      console.log(state.musicId);
    },
    updataMusicUrl(state, value) {
      state.musicUrl = value;
      console.log(state.musicUrl);
    },
    updataPlayState(state, value) {
      state.playState = value;
      console.log(state.playState);
    },
    updateCurrentTime(state, currentTime) {
      state.currentTime = currentTime;
    },
  },
});

export default store;
