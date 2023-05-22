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
  currentTime: 0, // 实时播放时长// 由audio中获取 用于进度条和歌词滚动
  musicList: [], //当前播放歌单
  musicListId: "", // 当前播放歌单的id
  currentIndex: -1, //当前播放音乐的索引
  searchKeyword: "", //搜索关键字 解决搜索后无法在搜索的问题
  // 音乐详情卡片的显隐
  isMusicDetailCardShow: true,
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
    updataMusicList(state, payload) {
      // 当歌单id发生变化时,重置当前播放音乐索引
      if (payload.musicListId != state.musicListId) {
        state.musicListId = payload.musicListId;
        state.currentIndex = -1;
      }
      // console.log(state.currentIndex);
      // 对歌单进行深拷贝再赋值 直接赋值是浅拷贝
      // 歌单是固定的死数据，而vuex中的musicList是动态的
      let musicList = payload.musicList.slice(0);
      state.musicList = musicList;
      // console.log('updateMusicList');
    },
    // 当前播放音乐的索引
    updateCurrentIndex(state, index) {
      // console.log('updateCurrentIndex');
      state.currentIndex = index;
      // console.log(state.currentIndex);
    },
    updataSearchKeyword(state, value) {
      state.searchKeyword = value;
    },
    changeMusicDetailCardState(state){
      state.isMusicDetailCardShow = !state.isMusicDetailCardShow;
    }
  },
});

export default store;
