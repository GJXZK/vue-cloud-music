<template>
  <!-- 歌曲详情页  -->
  <!-- 
        点击底部音乐封面 打开 左上角做关闭按钮 
        展示歌曲信息 旋转碟片  滚动歌词  热门评论
        通过改变界面到底部的距离  实现显示和隐藏 需要获取音乐详情 歌词  
  -->
  <div class="musicDetailCard" :class="[isMusicDetailCardShow ? '' : 'hide']">
    <!-- <img class="bg-blur" :src="musicInfo.al.picUrl" alt v-if="musicInfo.al" /> -->
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
              <div class="needle" :class="$store.state.playState ? 'needleRotate' : ''">
                <img src="@/assets/img/MusicDetailCard/needle.png" alt />
              </div>
              <!-- 碟 -->
              <div
                class="disc"
                :class="[
                $store.state.playState ? '':'pause',
                $store.state.isMusicLoad ? '':'discAnimation'
              ]"
              >
                <img src="@/assets/img/MusicDetailCard/disc.png" alt />
                <img
                  src="@/assets/img/test.jpg"
                  alt
                  class="musicAvatar"
                  v-if="!musicInfo.al.picUrl"
                />
                <img :src="musicInfo.al.picUrl" alt class="musicAvatar" v-else />
              </div>
            </div>
          </div>
          <!-- 歌曲名 歌曲专辑 歌手 -->
          <div class="right">
            <div class="title">
              <div class="musicName">{{ musicInfo.name }}</div>
              <div class="album" @click="goAlbumDetail(musicInfo.al.id)">{{ musicInfo.al.name }}</div>
              <div class="singer" @click="goSingerDetail(musicInfo.ar[0].id)">{{ musicInfo.ar[0].name }}</div>
            </div>
            <!-- 歌词 -->
            <LyricsScroll :lyric="lyric"></LyricsScroll>
          </div>
        </div>
        <!-- 评论 -->
        <div
          class="bottom"
          v-loading="isCommentLoading"
          element-loading-background="rgba(255, 255, 255, 0.1)"
        >
          <comment
            :comments="comment.comments"
            :commentType="'music'"
            :commentId="$store.state.musicId + ''"
            :musicTitle="musicInfo.name"
            @getComment="getMusicComment($store.state.musicId)"
            class="commentComponent"
          >
            <div slot="title">最新评论({{ comment.total }})</div>
          </comment>
        </div>
        <!-- <go-top scrollObj=".musicDetailCardContainer"></go-top> -->
      </div>
    </div>
    <div class="tip" v-else>暂无歌曲信息</div>
  </div>
</template>

<script>
import { getLyric, getMusicComments } from "@/API/index";
import LyricsScroll from "@/components/lyricsScroll/LyricsScroll";
import Comment from "@/components/comment/Comment.vue";
export default {
  data() {
    return {
      // 是否显示歌曲详情界面
      isMusicDetailCardShow: false,
      musicInfo: {
        name: ""
      },
      lyric: [[0, "正在加载歌词"]],
      isCommentLoading: true,
      currentCommentPage:1,
      comment:{}
    };
  },
  components: { LyricsScroll,Comment },
  methods: {
    colseCard() {
      this.$store.commit("changeMusicDetailCardState");
    },
    async getLyric(id) {
      let res = await getLyric(id);
      console.log(res);
      let lyrics = res.data.lrc.lyric;
      // 对获取到的歌词进行处理
      let arr = lyrics.split("\n");
      let array = [];
      // let obj = {};
      let time = "";
      let value = "";
      let result = [];

      //去除空行
      arr.forEach(item => {
        if (item != "") {
          array.push(item);
        }
      });
      arr = array;
      arr.forEach(item => {
        time = item.split("]")[0];
        value = item.split("]")[1];
        //去掉时间里的中括号得到xx:xx.xx
        var t = time.slice(1).split(":");
        //将结果压入最终数组
        result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
      });

      this.lyric = result;
      // console.log(this.lyric);
    },
    async getMusicComment(id) {
      let res = await getMusicComments(id);
      console.log(res);
      this.comment = res.data;
      this.isCommentLoading = false
    },
    goAlbumDetail(id){
      this.$router.push({
        name:"",
        params:{id:id}
      })
    },
    goSingerDetail(id){
      this.$router.push({
        name:'singerdetail',
        params:{id:id}
      })
      this.$store.commit("changeMusicDetailCardState")
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
        this.musicInfo = this.$store.state.musicList[
          this.$store.state.currentIndex
        ];
        console.log("歌曲信息");
        console.log(this.musicInfo);
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
    overflow-y: scroll;
    display: flex;
    z-index: 0;
    .w {
      margin: 0 auto;
      width: 60%;
      height: 100%;
      z-index: 0;
      .top {
        width: 100%;
        height: 550px;
        display: flex;
        .left {
          flex: 50%;
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
            // 播放模式下 针的位置
            .needleRotate {
              transform: rotate(22deg);
            }
            .disc {
              width: 250px;
              height: 250px;
              position: relative;
              border-radius: 125px;
              overflow: hidden;
              top: -12px;
              img:nth-child(1) {
                width: 100%;
                z-index: 1;
              }
              .musicAvatar {
                position: absolute;
                top: 35px;
                left: 35px;
                width: 190px;
                z-index: -1;
              }
            }

            .discAnimation {
              animation: disc 25s linear infinite;
              animation-delay: 0.8s;
            }
            @keyframes disc {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            .pause {
              animation-play-state: paused;
              -webkit-animation-play-state: paused;
            }
          }
        }
        .right {
          flex: 50%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          .title {
            width: 100%;
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .musicName {
              font-size: 30px;
              color: rgb(22, 22, 22);
            }
          }
        }
      }
      .bottom {
        height: 1000px;
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
.bg-blur {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;
  filter: blur(10000px);
}
.hide {
  bottom: calc(-100vh + 70px);
}
</style>