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
      <h2>视频详情</h2>
      <div class="video">
        <video :src="mvUrl" controls></video>
      </div>
      <!-- MV的作者 发布时间 -->
      <div class="MVDetial">
        <!-- 作者 -->
        <div class="artist">
          <!-- 头像 -->
          <div class="artist-img">
            <img :src="mvDetail.creator.avatarUrl" alt />
          </div>
          <!-- 作者名 -->
          <div class="artist-name">{{ mvDetail.creator.nickname }}</div>
        </div>
        <!-- 作品名 -->
        <div class="MVName">{{ mvDetail.title }}</div>
        <!-- 发布时间 -->
        <div class="publish">
          <p>发布时间 {{ changeDate(mvDetail.publishTime) }}</p>
          <p class="playCount">
            播放量 {{ changeNum(mvDetail.praisedCount
            ) }}
          </p>
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
      <div class="misiItem" v-for="(item) in Relatedvideos" :key="item.id" @click="gotoMV(item.id)">
        <div class="item-img">
          <img :src="item.coverUrl" alt />
          <div class="playcount">
            <i class="iconfont icon-shipin"></i>
            <p>{{ changeNum(item.playTime) }}</p>
          </div>
          <div class="duration">
            <p>{{ changeTime(item.durationms) }}</p>
          </div>
        </div>
        <div class="item-detail">{{ item.title   }}</div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { handleNum, formatDate,handleMusicTime } from "@/plugins/utils";
import {
  getVideoDetail,
  getVideoUrl,
  getVideoComments,
  getMusicHotComments,
  getVideoRelated
} from "../../API";
import comment from "@/components/comment/Comment.vue";
export default {
  data() {
    return {
      mvDetail: {
        creator: {
          avatarUrl: ""
        }
      },
      mvUrl: "",
      loading: false,
      isCommentLoading: true,
      hotComments: {},
      comment: {},
      Relatedvideos: []
    };
  },
  created() {
    this.getMVDetail();
    this.getMVUrl();
    this.getMVComments();
    this.getVideoRelated();
  },
  components: { comment },
  methods: {
    async getMVDetail() {
      const res = await getVideoDetail(this.$route.params.id);
      this.mvDetail = res.data.data;
    },
    async getMVUrl() {
      const res = await getVideoUrl(this.$route.params.id);
      this.mvUrl = res.data.urls[0].url;
      this.$store.commit("updataPlayState", false);
    },
    changeNum(num) {
      return handleNum(num);
    },
    changeDate(value) {
      // 1、先将时间戳转成Date对象
      const date = new Date(value);

      // 2、将date进行格式化
      return formatDate(date, "yyyy-MM-dd");
    },
    async getMVComments() {
      const res = await getVideoComments(this.$route.params.id);
      const hres = await getMusicHotComments(this.$route.params.id, 5);
      this.hotComments = hres.data;
      this.comment = res.data;
      if (res.data.code == 200) {
        this.isCommentLoading = false;
      }
    },
    async getVideoRelated() {
      const res = await getVideoRelated(this.$route.params.id);
      this.Relatedvideos = res.data.data;
    },
    changeTime(time){
      return handleMusicTime(time);
    },
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
    .bottom {
      margin-top: 10px;
    }
  }
  .recommend-box {
    width: 30%;
    height: 1000px;
    h2 {
      margin: 15px 0;
    }
    .misiItem {
      display: flex;
      width: 80%;
      .item-img {
        margin: 5px 0;
        width: 180px;
        height: 100px;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        img {
          width: 120%;
        }
        .playcount {
          position: absolute;
          color: aliceblue;
          font-size: 15px;
          top: 0px;
          right: 10px;
          display: flex;
          align-items: center;
          padding: 5px;
        }
        .duration {
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