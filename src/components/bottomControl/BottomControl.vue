<template>
  <div class="bottomControl">
    <audio src></audio>
    <!-- bottom左侧 歌曲图标 点击图标弹出播放界面 歌曲信息 -->
    <div class="left">
      <div class="musicpic">
        <img :src="defaultImg" alt v-if="musicDetail.al" />
        <img src="../../assets/img/test.jpg" v-else alt />
      </div>
      <div class="musicInfo">
        <div class="musicName">
          <!-- {{ musicDetail.name }} -->
          十年
        </div>
        <div class="singer">
          陈奕迅
          <!-- {{ musicDetail.ar[0].name }} -->
        </div>
      </div>
    </div>
    <!-- bottom中间 歌曲操作 上一首 下一首 暂停 进度条-->
    <div class="center">
      <!-- 歌曲操作 -->
      <div class="controls">
        <span>
          <i class="iconfont icon-xunhuan"></i>
        </span>
        <span>
          <i class="iconfont icon-shangyishou"></i>
        </span>
        <span>
          <i class="iconfont icon-bofang"></i>
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
        <span class="currentTime"></span>
        <!-- :value 是单向的  要实现双向要v-model -->
        <el-slider></el-slider>
        <span class="totalTime"></span>
      </div>
    </div>
    <!-- bottom右侧 播放列表  -->
    <div class="right">
      <div class="volumeControl">
        <i class="iconfont icon-yinliang"></i>
        <el-slider class="volumeSlider" v-model="volume"></el-slider>
      </div>
      <div class="playList" @click="openDrawer">
        <i class="iconfont icon-bofangliebiao"></i>
      </div>
    </div>
    <!-- 抽屉 -->
    <el-drawer :visible.sync="drawer" :with-header="false" width="300">
      <!-- <div class="drawerHeader">总{{ musicList.length }}首</div> -->
      <!-- <el-table
        :data="musicList"
        stripe
        style="width: 100%"
        :show-header="false"
        @row-dblclick="clickRow"
        highlight-current-row
        lazy
      >
        <el-table-column prop="name" width="150px"> </el-table-column>
        <el-table-column prop="ar[0].name" width="80px"> </el-table-column>
        <el-table-column prop="dt" width="70px"> </el-table-column>
      </el-table> -->
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicDetail: {},
      volume: 300,
      drawer: false,
    };
  },
  computed: {
    defaultImg() {
      return "../../assets/img/test.jpg";
    }
  },
  methods:{
    // 点击打开抽屉的回调
    openDrawer() {
      // 关闭也是这个回调，所以直接取反
      this.drawer = !this.drawer;
      this.hasDrawerOpend = true;
      this.handleDrawerListDOM(this.currentMusicIndex);
    },
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
        font-size: 24px;
        color: #313131;
      }
      span {
        display: flex;
      }
      span:nth-child(3) {
        font-size: 27px;
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
}
</style>