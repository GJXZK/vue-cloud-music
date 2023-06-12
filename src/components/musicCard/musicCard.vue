<template>
  <!-- 歌曲展示模块 -->
  <div class="musicCard">
    <div class="musicItem" v-for="(item,index) in newSongs" :key="index">
      <div class="itemContent" @click="playMusic(item)">
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
    async playMusic(item) {
      // 这里双击应该是要把当前双击的歌曲插入到当前的歌单中
      // 首先获取当前的歌单列表和歌曲索引
      let musicList = this.$store.state.musicList;
      let currentIndex = this.$store.state.currentIndex;
      // 先判断该歌曲是否已经在歌单中存在，避免重复点击导致歌单出现相同歌曲
      let isExist = musicList.find(item => item.id == item.id);
      if (isExist) {
        // 如果已经存在 则只提交歌曲id并return出去
        this.$store.commit("updataMusicId", item.id);
        return;
      }
      this.$store.commit("updataPlayState", false);
      // 将请求到的歌曲详情插入到歌单对应位置并提交至vuex
      musicList.splice(currentIndex + 1, 0, item);
      this.$store.commit("updataMusicId", item.id);
      this.$store.commit("updataMusicList", {
        musicList,
        musicListId: this.$store.state.musicListId
      });
        
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