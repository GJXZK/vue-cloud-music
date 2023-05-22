<template>
  <!-- 歌曲详情页  -->
  <!-- 
        点击底部音乐封面 打开 左上角做关闭按钮 
        展示歌曲信息 旋转碟片  滚动歌词  热门评论
        通过改变界面到底部的距离  实现显示和隐藏 需要获取音乐详情 歌词  
  -->
  <div class="musicDetailCard" :class="[
        isMusicDetailCardShow ? '' : 'hide',
       ]">
    <div class="closeCard" @click="colseCard">
      <i class="iconfont icon-arrow-down-bold"></i>
    </div>
    <!-- 歌曲详情 主体部分 上半部分 卡碟 歌词 下半部分评论 -->
    <div class="musicDetailContainer" v-if="musicInfo.name">
      <div class="w">
        <!-- 上半部分 旋转的卡碟 歌曲部分信息 滚动歌词 -->
        <div class="top">
          <div class="left">
            <div class="discContainer">
              <!-- 针 -->
              <div class="needle">
                <img src="@/assets/img/MusicDetailCard/needle.png" alt />
              </div>
              <!-- 碟 -->
              <div class="disc">
                <img src="@/assets/img/MusicDetailCard/disc.png" alt />
                <img src="@/assets/img/test.jpg" alt="" v-if="!musicInfo.al">
                <img :src="musicInfo.al.picUrl" alt="" class="musicAvatar" v-else>
              </div>
            </div>
          </div>
          <div class="right"></div>
        </div>
        <!-- 评论 -->
        <div class="bottom"></div>
      </div>
    </div>
    <div class="tip" v-else>暂无歌曲信息</div>
  </div>
</template>

<script>
import { getLyric, getMusicComments } from "@/API/index";
export default {
  data() {
    return {
      // 是否显示歌曲详情界面
      isMusicDetailCardShow: true,
      musicInfo: {
        name: "AAA"
      },
      lyric: [[0, "正在加载歌词"]]
    };
  },
  methods: {
    colseCard() {
      this.$store.commit("changeMusicDetailCardState");
    },
    async getLyric(id) {
      let res = await getLyric(id);
      console.log(res);
    },
    async getMusicComment(id) {
      let res = await getMusicComments(id);
      console.log(res);
    }
  },
  watch: {
    // 当Vuex中的 isMusicDetailCardShow 发生变化
    "$store.state.isMusicDetailCardShow"(isMusicDetailCardShow) {
      this.isMusicDetailCardShow = isMusicDetailCardShow;
      //  打开详情界面后 获取歌词 评论
      //  前提是 界面是打开状态 有正在播放的歌曲
      if (isMusicDetailCardShow == true && this.$store.state.musicId != "") {
        console.log("获取歌词");
        this.getLyric(this.$store.state.musicId);
        this.getMusicComment(this.$store.state.musicId);
      }
    },
    // 当Vuex中的 musicId 发生变化，获取评论 歌词
    "$store.state.musicId"(musicId) {
      this.lyric = [[0, "正在加载歌词"]];
      this.getLyric(musicId);
      this.getMusicComment(this.$store.state.musicId);
      this.musicInfo = this.$store.state.musicList[
        this.$store.state.currentIndex
      ];
    }
  },
  created() {}
};
</script>

<style scoped lang="less">
.musicDetailCard {
  position: fixed;
  width: 100%;
  height: calc(100vh - 70px);
  bottom: 70px;
  z-index: 1000;
  // display: flex;
  background-color: #fff;
  transition: bottom 0.5s ease;
  //   关闭音乐详情页
  .closeCard {
    position: absolute;
    left: 40px;
    top: 20px;
    font-size: 24px !important;
  }
  //   音乐详情页主体
  .musicDetailContainer {
    height: 100%;
    margin: 0px auto;
    background-color: #ccc;
    overflow-y: scroll;
    display: flex;
    .w {
      margin: 0 auto;
      width: 60%;
      height: 100%;
      background-color: #fff;
      .top {
        width: 100%;
        height: 550px;
        background-color: #fff;
        display: flex;
        .left {
          flex: 50%;
          background-color: pink;
          .discContainer {
            margin: 60px auto;
            width: 250px;
            position: relative;
            .needle {
              position: relative;
              left: 50%;
              width: 100px;
              height: 80px;
              z-index: 10000;
              transition: all 1s;
              transform-origin: 5.3px 5.3px;
              img {
                width: 100%;
              }
            }
            .needleRotate{
              transform: rotate(22deg);
            }
            .disc {
              width: 250px;
              height: 250px;
              position: relative;
              top: -12px;
              img {
                width: 100%;
              }
            }
            .discAnimation{
              animation: disc 25s linear infinite;
              animation-delay: 0.8s;
            }
            @keyframes disc{
              from{
                transform: rotate(0deg);
              }
              to{
                transform: rotate(360deg);
              }
            }
          }
        }
        .right {
          flex: 50%;
        }
      }
      .bottom {
        height: 1000px;
        background-color: #ccc;
      }
    }
  }
  .tip {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.hide {
  bottom: calc(-100vh + 70px);
}
</style>