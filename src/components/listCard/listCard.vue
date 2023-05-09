<template>
    <!-- 歌单列表组件  -->
  <div class="listCard">
    <div class="listItem" v-for="(item,index) in musicLists" :key="index">
      <div class="itemBox">
        <div class="imgbox">
          <img :src="item.picUrl" alt />
        </div>
        <div class="title">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["musicLists"],
  created() {
    console.log(this.musicLists);
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
        width: 100%;
        border-radius: 20px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>