<template>
  <div class="videodetail">
    <!-- 
        /////MV详情/////////////////////     ||||||||||||||||||||
        ///_______________________ /////     |||||推荐视频|||||||
        ///_______________________/////      ||||||||||||||||||||
        ///________Video   _______/////      ||||||||||||||||||||
        ///_______________________/////      ||||||||||||||||||||
        ///_______________________//////     ||||||||||||||||||||
        ////////////////////////////////     ||||||||||||||||||||
        ///MV介绍///////////////////////     ||||||||||||||||||||
        ////////////////////////////////     ||||||||||||||||||||
        ////////////////////////////////     ||||||||||||||||||||
        ////评  论//////////////////////     ||||||||||||||||||||
        ////////////////////////////////     ||||||||||||||||||||
        ////////////////////////////////     ||||||||||||||||||||
        ////////////////////////////////     ||||||||||||||||||||
        ////////////////////////////////     ||||||||||||||||||||

    -->
    <!-- 两个大盒子水平排列-->
    <!-- 视频播放的盒子  -->
    <div class="video-box">
      <h2>MV详情</h2>
      <div class="video">
        <video :src="mvUrl" controls></video>
      </div>
      <!-- MV的作者 发布时间 -->
      <div class="MVDetial">
        <!-- 作者 -->
        <div class="artist">
          <!-- 头像 -->
          <div class="artist-img">
            <img :src="mvDetail.artists[0].img1v1Url" alt />
          </div>
          <!-- 作者名 -->
          <div class="artist-name">{{ mvDetail.artists[0].name }}</div>
        </div>
        <!-- 作品名 -->
        <div class="MVName">{{ mvDetail.name }}</div>
        <!-- 发布时间 -->
        <div class="publish">
          <p>发布时间 {{ mvDetail.publishTime }}</p>
          <p class="playCount">播放量 {{ changeNum(mvDetail.playCount) }}</p>
        </div>
      </div>
      <div
        class="bottom"
        v-loading="isCommentLoading"
        element-loading-background="rgba(255, 255, 255, 0.1)"
      >
        <comment
          :comments="hotComments.hotComments"
          :commentType="'music'"
          :commentId="$route.params.id + ''"
          :musicTitle="mvDetail.name"
          class="commentComponent"
        >
          <div slot="title">热门评论({{ hotComments.total }})</div>
        </comment>
        <comment
          :comments="comment.comments"
          :commentType="'music'"
          :commentId="$route.params.id + ''"
          :musicTitle="mvDetail.name"
          class="commentComponent"
        >
          <div slot="title">最新评论</div>
        </comment>
      </div>
    </div>
    <!-- 推荐视频的盒子 -->
    <div class="recommend-box">
      <h2>相关推荐</h2>
      <!-- 推荐的视频 -->
      <div class="misiItem" v-for="(item) in MVmisi" :key="item.id" @click="gotoMV(item.id)">
        <div class="item-img">
          <img :src="item.cover" alt="">
          <div class="playcount">
            <i class="iconfont icon-shipin"></i>
            <p>{{ changeNum(item.playCount) }}</p>
          </div>
          <div class="duration">
            <p>{{ changeTime(item.duration) }}</p>
          </div>
        </div>
        <div class="item-detail">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { handleNum , handleMusicTime} from "@/plugins/utils";
import { getMVDetail, getMVUrl,getMVComments,getMusicHotComments,getMVsimi } from "../../API";
import comment from "@/components/comment/Comment.vue";
export default {
  data() {
    return {
      mvDetail: {
        artists:[{img1v1Url:''}]
      },
      mvUrl: "",
      loading: false,
      isCommentLoading:true,
      hotComments: {},
      comment:{},
      MVmisi:[]
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.getMVDetail();
    this.getMVUrl();
    this.getMVComments();
    this.getMVSimi();
  },
  components:{comment},
  methods: {
    async getMVDetail() {
      const res = await getMVDetail(this.$route.params.id);
      console.log(res);
      this.mvDetail = res.data.data;
      if(this.mvDetail.artists[0].img1v1Url == null){
        this.mvDetail.artists[0].img1v1Url = 'https://s1.ax1x.com/2022/09/24/xAJfFe.jpg'
      }
    },
    async getMVUrl() {
      const res = await getMVUrl(this.$route.params.id);
      console.log(res);
      this.mvUrl = res.data.data.url;
      this.$store.commit("updataPlayState", false);
    },
    changeNum(num) {
      return handleNum(num);
    },
    changeTime(time){
      return handleMusicTime(time);
    },
    async getMVComments() {
      const res = await getMVComments(this.$route.params.id);
      const hres = await getMusicHotComments(this.$route.params.id,1);
      console.log(res.data);
      this.hotComments = hres.data
      this.comment = res.data;
      if(res.data.code == 200){
        this.isCommentLoading=false
      }
    },
    async getMVSimi() {
      const res = await getMVsimi(this.$route.params.id);
      console.log(res);
      this.MVmisi = res.data.mvs;
    },
    gotoMV(id) {
      this.$router.push({ name: "MVDetail", params: { id} });
    }
  }
};
</script>

<style scoped lang="less">
.videodetail {
  display: flex;
  justify-content: space-around;
  .video-box {
    width: 50%;
    margin: 0 auto;
    h2 {
      margin: 15px 0;
    }
    .video {
      width: 100%;
      video {
        width: 100%;
      }
    }
    .MVDetial {
      .artist {
        margin-top: 20px;
        display: flex;
        align-items: center;
        .artist-img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          img {
            height: 100%;
          }
        }
        .artist-name {
          margin-left: 20px;
        }
      }
      .MVName {
        margin-top: 20px;
        font-size: 26px;
        font-weight: bold;
      }
    }
    .publish {
      margin-top: 20px;
      display: flex;
      .playCount {
        margin-left: 20px;
      }
    }
    .bottom{
      margin-top: 10px;
    }
  }
  .recommend-box {
    width: 30%;
    height: 1000px;
    h2 {
      margin: 15px 0;
    }
    .misiItem{
      display: flex;
      width: 80%;
      .item-img{
        margin:5px 0;
        width: 180px;
        height: 100px;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        img{
          width: 120%;
        }
        .playcount{
          position: absolute;
          color: aliceblue;
          font-size: 15px;
          top: 0px;
          right: 10px;
          display: flex;
          align-items: center;
          padding: 5px;
        }
        .duration{
          position: absolute;
          top: 80px;
          right: 10px;
          color: #fff;
        }
      }
    }
  }
}
</style>