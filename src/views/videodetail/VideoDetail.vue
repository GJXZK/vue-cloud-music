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
        <video :src="mvUrl" autoplay="true" controls></video>
      </div>
      <div class="MV"></div>
    </div>
    <!-- 推荐视频的盒子 -->
    <div class="recommend-box">
      <h2>推荐视频</h2>
    </div>
  </div>
</template>

<script>
import { getMVDetail, getMVUrl } from "../../API";
export default {
  data() {
    return {
      mvDetail: {},
      mvUrl: "",
      loading: false
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.getMVDetail();
    this.getMVUrl();
  },
  methods: {
    async getMVDetail() {
      const res = await getMVDetail(this.$route.params.id);
      console.log(res);
    },
    async getMVUrl() {
      const res = await getMVUrl(this.$route.params.id);
      console.log(res);
      this.mvUrl = res.data.data.url;
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
    .video {
      width: 100%;
      video {
        width: 100%;
      }
    }
  }
  .recommend-box {
    width: 30%;
    height: 1000px;
    background-color: #ccc;
  }
}
</style>