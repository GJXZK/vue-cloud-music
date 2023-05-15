<template>
  <div class="bottomControl">
    <audio
      :src="musicUrl"
      autoplay
      ref="audioPlayer"
      @play="changeState(true)"
      @pause="changeState(false)"
      @ended="changeMusic('next')"
      @timeupdate="tiemupdate"
    ></audio>
    <!-- bottom左侧 歌曲图标 点击图标弹出播放界面 歌曲信息 -->
    <div class="left">
      <div class="musicpic">
        <img :src="musicDetail.al.picUrl" alt v-if="musicDetail.al" />
        <img src="../../assets/img/test.jpg" v-else alt />
      </div>
      <div class="musicInfo">
        <div class="musicName" v-if="musicDetail && musicDetail.name">{{ musicDetail.name }}</div>
        <div class="singer" v-if="musicDetail && musicDetail.ar">{{ musicDetail.ar[0].name }}</div>
      </div>
    </div>
    <!-- bottom中间 歌曲操作 上一首 下一首 暂停 进度条-->
    <div class="center">
      <!-- 歌曲操作 -->
      <div class="controls">
        <span @click="playType = playType=='order'?'random':'order'">
          <i class="iconfont icon-xunhuan" v-show="playType == 'order'"></i>
          <i class="iconfont icon-suiji" v-show="playType == 'random'"></i>
        </span>
        <span>
          <i class="iconfont icon-shangyishou"></i>
        </span>
        <span @click="musicList.length != 0 ? changePlayState() : ''">
          <i class="iconfont icon-icon_play" v-if="!this.$store.state.playState"></i>
          <i class="iconfont icon-zantingtingzhi" v-else></i>
        </span>
        <span>
          <i class="iconfont icon-xiayishou"></i>
        </span>
        <span>
          <i class="iconfont icon-xihuan"></i>
        </span>
      </div>
      <!-- liners 进度条 -->
      <!-- 进度条 -->
      <div class="progressBar">
        <span class="currentTime">{{currentTime | handleMusicTime}}</span>
        <!-- :value 是单向的  要实现双向要v-model -->
        <el-slider
          class="progressSlider"
          v-model="timeProgress"
          :show-tooltip="false"
          :disabled="musicList.length == 0"
          @change="dragSlider"
        ></el-slider>

        <span class="totalTime">{{ duration }}</span>
      </div>
    </div>
    <!-- bottom右侧  音乐控制 播放列表  -->
    <div class="right">
      <div class="volumeControl">
        <i class="iconfont icon-yinliang"></i>
        <el-slider class="volumeSlider" v-model="volume"></el-slider>
      </div>
      <div class="playList" @click="openDrawer">
        <i class="iconfont icon-bofangliebiao"></i>
      </div>
      <el-drawer :visible.sync="drawer" :with-header="false" size="100">
        <div class="drawerHeader">总{{ musicList.length }}首</div>
        <el-table
          :data="musicList"
          stripe
          style="width: 100%"
          :show-header="false"
          @row-dblclick="clickRow"
          highlight-current-row
          lazy
        >
          <el-table-column prop="name" width="150px"></el-table-column>
          <el-table-column prop="ar[0].name" width="80px"></el-table-column>
          <el-table-column prop="dt" width="70px"></el-table-column>
        </el-table>
      </el-drawer>
    </div>
  </div>
</template>

<script>
// import { handleMusicTime,returnSecond } from '@/plugins/utils';
import { getMusicUrl, getMusicDetail } from "@/API/index";
import { handleMusicTime, returnSecond } from "@/plugins/utils";
let lastSecond = 0;
let durationNum = 0;
// let volumeSave = 0;
export default {
  data() {
    return {
      musicDetail: {},
      volume: 300,
      drawer: false,
      musicUrl: "",
      playType: "order", // 播放模式 （顺序播放 随机播放 order random）
      musicList: [], // 播放列表
      duration: "00:00", //音乐总时长
      currentTime: 0, //当前播放时间
      timeProgress: 0, //进度条的位置
      showPopup: false //
    };
  },
  computed: {
    defaultImg() {
      return "../../assets/img/test.jpg";
    }
  },
  methods: {
    // 点击打开抽屉的回调
    openDrawer() {
      // 关闭也是这个回调，所以直接取反
      this.showPopup = !this.showPopup;
      this.drawer = !this.drawer;
      this.hasDrawerOpend = true;
      // this.handleDrawerListDOM(this.currentMusicIndex);
    },
    // 获取歌曲的播放地址
    async getMusicUrl(id) {
      const res = await getMusicUrl(id);
      this.musicUrl = res.data.data[0].url;
    },
    // 获取歌曲详情
    async getMusicDetail(id) {
      const res = await getMusicDetail(id);
      this.musicDetail = res.data.songs[0];
      this.duration = handleMusicTime(res.data.songs[0].dt);
      durationNum = returnSecond(this.duration);
    },
    // 播放音乐的函数
    playMusic() {
      this.$refs.audioPlayer.play();
    },
    // 暂停音乐函数
    pauseMusic() {
      this.$refs.audioPlayer.pause();
    },
    // audio开始和暂停的回调 在vuex中修改状态
    changeState(state) {
      this.$store.commit("updataPlayState", state);
    },
    changePlayState() {
      !this.$store.state.playState ? this.playMusic() : this.pauseMusic();
    },
    // 更新播放时间
    tiemupdate() {
      let time = this.$refs.audioPlayer.currentTime;
      this.$store.commit("updateCurrentTime", time);
      time = Math.floor(time);
      if (time !== lastSecond) {
        lastSecond = time;
        this.currentTime = time;
        this.timeProgress = Math.floor((time / durationNum) * 100);
      }
    },
    // 拖拽进度条功能
    dragSlider(e) {
      this.currentTime = Math.floor((e / 100) * durationNum);
      this.$refs.audioPlayer.currentTime = this.currentTime;
    },
    clickRow() {
      console.log("点击播放");
    },
    // 更新播放列表
    updateMusicList(value) {
      this.musicList = value;
    }
  },
  watch: {
    "$store.state.musicId"(id) {
      console.log("vuex中的Id发生了变化");
      this.pauseMusic();
      this.updateMusicList(this.$store.state.musicList);
      this.getMusicUrl(id);
      this.getMusicDetail(id);
      this.playMusic();
    }
  },
  filters: {
    handleMusicTime
  }
};
</script>

<style lang="less" scoped>
.bottomControl {
  border-top: 1px solid #ddd;
  background-color: #fff;
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  z-index: 10000;

  .left {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    .musicpic {
      width: 50px;
      height: 50px;
      margin-left: 10px;
      overflow: hidden;
      border-radius: 5px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .musicInfo {
      margin-left: 20px;
      color: #252525;
      font-size: 16px;
      width: 80px;
      .musicName {
        margin-bottom: 4px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .singer {
        transform: scale(0.9);
        margin-left: -3px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
      }
    }
  }
  .center {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .controls {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      line-height: 40px;
      i {
        font-size: 27px;
        color: #313131;
      }
      span {
        display: flex;
      }
      span:nth-child(3) {
        width: 40px;
        display: flex;
        justify-content: center;
        font-size: 27px;
      }
      .icon-zantingtingzhi {
        font-size: 40px;
      }
    }
    .progressBar {
      width: 400px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .currentTime,
      .totalTime {
        font-size: 18px;
        transform: scale(0.85);
        color: #aaa;
        margin: 0 5px;
        width: 30px;
        text-align: center;
      }
      .progressSlider {
        width: 320px;
      }
    }
  }
  .right {
    width: 200px;
    display: flex;
    align-items: center;
    .volumeControl {
      display: flex;
      align-items: center;
      margin-right: 15px;
      width: 100px;
      .icon-yinliang {
        font-size: 24px;
        margin-right: 7px;
      }
      .volumeSlider {
        width: 55px;
      }
      .playList {
        width: 20px;
        height: 20px;
        .right .icon-bofangliebiao {
          font-size: 20px;
          margin-right: 10px !important;
        }
      }
    }
  }
  .drawerHeader {
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-left: 20px;
    color: #aaa;
  }
  .el-drawer__wrapper .el-drawer__container {
    height: calc(100vh - 70px) !important;
  }
  .el-drawer.ttb {
    height: 100% !important;
  }
}
</style>