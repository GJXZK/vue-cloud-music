<template>
  <!-- 歌单列表组件  -->
  <div class="listCard">
    <div class="listItem" v-for="(item,index) in musicLists" :key="index">
      <div class="itemBox" @click="gotoMusicListDetail(item.id)">
        <div class="imgbox">
          <img class="MusicListAvatar" :src="item.picUrl" alt />
          <!-- 右上角播放量 -->
          <span class="playCount">{{ changeNum(item.playCount)}}</span>
        </div>
        <div class="title">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { handleNum } from "@/plugins/utils";
export default {
  props: ["musicLists"],
  methods: {
    changeNum(num) {
      return handleNum(num);
    },
    gotoMusicListDetail(id) {
      console.log(id);
      this.$router.push({
        name: "musiclistdetail",
        params: { id: id }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.listCard {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  .listItem {
    flex: 18.4%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    .itemBox {
      width: 80%;
      .imgbox {
        position: relative;
        width: 200px;
        height: 200px;
        border-radius: 20px;
        overflow: hidden;
        img {
          width: 100%;
        }
        .playCount {
          position: absolute;
          z-index: 10;
          right: 10px;
          top: 8px;
          color: white;
        }
      }
      .imgbox::before {
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
    }
    .title{
      margin-top: 10px;
    }
  }
}
</style>