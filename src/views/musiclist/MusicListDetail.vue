<template>
  <div class="musicListDetail">
    <!-- 歌单信息 -->
    <div class="listInfo">
      <!-- 歌单封面 -->
      <div class="listAvatar">
        <img :src="musicListDetail.coverImgUrl" alt />
      </div>
      <div class="right">
        <!-- 标题 -->
        <div class="title">
          <div class="titleTag">歌单</div>
          <div class="titleContent">{{ musicListDetail.name }}</div>
        </div>
        <!-- 用户信息 -->
        <div class="user">
          <div class="userAvatar">
            <img :src="musicListDetail.creator.avatarUrl" alt />
          </div>
          <div
            class="userName"
            @click="
              $router.push({
                name: 'personal',
                params: { uid: musicListDetail.creator.userId },
              })
            "
          >{{ musicListDetail.creator.nickname }}</div>
          <div class="createTime">{{ musicListDetail.createTime | showDate }}创建</div>
        </div>
        <!-- 操作按钮 -->
        <div class="buttons">
          <div class="buttonItem playAll" @click="playAll">
            <i class="iconfont icon-bofang playAll"></i>
            <span>播放全部</span>
          </div>
          <div class="buttonItem" v-if="!isCreated" @click="collectList">
            <i class="iconfont icon-xihuan" :class="isSub ? 'red' : ''"></i>
            <span>{{ isSub ? "已收藏" : "收藏" }}</span>
          </div>
          <div class="buttonItem">
            <i class="iconfont icon-zhuanfa"></i>
            <span>分享</span>
          </div>
        </div>
        <!-- 标签 -->
        <div class="tags">
          标签：
          <div class="tagItem" v-for="(item, index) in musicListDetail.tags" :key="index">{{ item }}</div>
          <div v-if="musicListDetail.tags.length == 0">暂无标签</div>
        </div>
        <!-- 歌曲列表的歌曲数量和播放量 -->
        <div class="otherInfo">
          <div class="musicNum">歌曲 : {{ musicListDetail.trackCount | handleNum }}</div>
          <div class="playCount">播放 : {{ musicListDetail.playCount | handleNum }}</div>
        </div>
        <div class="desc">
          简介 :
          {{
          musicListDetail.description
          ? musicListDetail.description
          : "暂无简介"
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMusicListDetailById } from "@/API";
export default {
  data() {
    return {
      musicListDetail: null
    };
  },
  methods: {
    async getMusicListDetail() {
      var res = await getMusicListDetailById(this.$route.params.id);
      this.musicListDetail = res.data.playlist;
      console.log(res);
    }
  },
  mounted() {
    this.getMusicListDetail();
  }
};
</script>

<style scoped lang="less">
.musicListDetail {
  overflow-y: scroll;
  height: calc(100vh - 140px);
  .listInfo {
    display: flex;
    padding: 25px 15px;
    .listAvatar {
      width: 150px;
      height: 150px;
      overflow: hidden;
      border-radius: 10px;
      position: relative;
      img {
        width: 100%;
      }
    }
    .listAvatar::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      background: url("@/assets/img/imgLoading.png") no-repeat;
      background-size: contain;
      z-index: -1;
    }
    .right {
      width: calc(100% - 200px);
      .title {
        display: flex;
        .titleTag {
          font-size: 12px;
          color: #ec4141;
          border: 1px solid #ec4141;
          padding: 1px 2px;
          border-radius: 2px;
          margin-right: 5px;
          transform: scale(0.8);
        }
        .titleContent {
          font-size: 20px;
          font-weight: 600;
          color: #373737;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 90%;
        }
      }
      .user {
        display: flex;
        .userAvatar {
          height: 25px;
          width: 25px;
          margin-right: 8px;
          img {
            width: 100%;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>