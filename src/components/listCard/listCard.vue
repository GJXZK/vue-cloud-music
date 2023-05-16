<template>
  <!-- 歌单列表组件  -->
  <div class="listCard">
    <div class="listItem" v-for="(item,index) in musicLists" :key="index">
      <div class="itemBox">
        <div class="imgbox">
          <img :src="item.picUrl" alt />
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
        width: 100%;
        border-radius: 20px;
        overflow: hidden;
        img::after{
          content: '';
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: url('@/assets/img/imgLoading.png');
          background-size: contain;
        }
        img {
          width: 100%;
        }
        .playCount{
          position: absolute;
          z-index: 10;
          right: 10px;
          top: 8px;
          color: white;
        }
      }
    }
  }
}
</style>