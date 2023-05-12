<template>
  <!-- 歌曲展示模块 -->
  <div class="musicCard">
    <div class="musicItem" v-for="(item,index) in newSongs" :key="index">
      <div class="itemContent" @click="playMusic(item.id)">
        <!-- 歌曲封面 -->
        <div class="musicimg">
          <img :src="item.picUrl" alt />
          <i class="iconfont icon-shipin"></i>
        </div>
        <!-- 歌曲信息 -->
        <div class="musicInfo">
          <!-- 播放按钮  -->
          <div class="mname">{{ item.name }}</div>
          <div class="arname">{{ item.song.artists[0].name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["newSongs"],
  methods: {
    async playMusic(id) {
        this.$store.commit('updataMusicId',id);
        
    }
  }
};
</script>

<style lang="less" scoped>
.musicCard {
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
  .musicItem {
    flex: 40%;
    margin: 10px 20px 10px 20px;
    .itemContent {
      width: 100%;
      display: flex;
      .musicimg {
        position: relative;
        display: flex;
        width: 15%;
        min-width: 90px;
        border-radius: 20px;
        overflow: hidden;
        img {
          width: 100%;
        }
        i {
          position: absolute;
          margin: auto;
        }
      }
      .musicInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
        .mname{
          font-size: 20px;
          margin-bottom: 10px;
        }
        .arname{
          
        }
      }
    }
  }
}
</style>