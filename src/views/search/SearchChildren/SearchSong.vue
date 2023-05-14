<template>
  <div class="SearchSong">
    <!-- 搜索结果 -->
    <div class="tip">找到{{ songCount }}首单曲</div>
    <!-- 最佳匹配 有最佳匹配而且是第一页的时候显示-->
    <div class="multiMatch" v-if="multiMatch.artist">
      <!-- title -->
      <div class="matchTitle">最佳匹配</div>
      <!-- 内容 -->
      <div class="matchContent">
        <!-- 图片 info -->
        <div class="matchResult" v-for="(item,index) in multiMatch.artist" :key="index">
          <div class="matchCover">
            <img :src="item.img1v1Url+'?param==100y100'" alt />
          </div>
          <div class="matchName">歌手：{{ item.name }}</div>
          <i class="iconfont icon-arrow-right-bold"></i>
        </div>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <el-table
      :data="searchSongList"
      size="small"
      style="width: 100%"
      @row-dblclick="clickRow"
      @cell-click="clickCell"
      highlight-current-row
      stripe
    >
      <el-table-column label width="30" type="index"></el-table-column>
      <el-table-column label width="23">
        <i class="iconfont icon-download"></i>
      </el-table-column>
      <el-table-column prop="name" label="音乐标题" min-width="200"></el-table-column>
      <el-table-column prop="ar[0].name" label="歌手" min-width="100"></el-table-column>
      <el-table-column prop="al.name" label="专辑" min-width="170"></el-table-column>
      <el-table-column prop="dt" label="时长" min-width="60"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { handleMusicTime } from "@/plugins/utils";
import { getMultimatch, getSearch } from "@/API";
export default {
  data() {
    return {
      multiMatch: {},
      searchSongList: [],
      songCount: 0
      // currentPage:1,
    };
  },
  created() {
    console.log("我是SearchSong");
    this.getMultimatch();
    this.getSearch();
  },
  methods: {
    async getMultimatch() {
      const res = await getMultimatch(this.$route.params.keyword);
      this.multiMatch = res.data.result;
    },
    async getSearch() {
      const res = await getSearch(this.$route.params.keyword);
      this.searchSongList = res.data.result.songs;
      this.songCount = res.data.result.songCount;
      this.searchSongList.forEach((item,index)=>{
        this.searchSongList[index].dt = handleMusicTime(item.dt);
      })
      console.log(this.searchSongList);
    },

    // 处理索引
    handleIndex(index) {
      console.log(index);
      index = index + 1 + 30 * (this.currentPage - 1);
      if (index < 10) {
        return "0" + index;
      } else {
        return index;
      }
    },

    clickCell() {},
    async clickRow(row) {
      // 这里双击应该是要把当前双击的歌曲插入到当前的歌单中
      // 首先获取当前的歌单列表和歌曲索引
      let musicList = this.$store.state.musicList;
      let currentIndex = this.$store.state.currentIndex;
      // 先判断该歌曲是否已经在歌单中存在，避免重复点击导致歌单出现相同歌曲
      let isExist = musicList.find(item => item.id == row.id);
      if (isExist) {
        // 如果已经存在 则只提交歌曲id并return出去
        this.$store.commit("updataMusicId", row.id);
        return;
      }
      this.$store.commit("updataPlayState", false);
      // 将请求到的歌曲详情插入到歌单对应位置并提交至vuex
      musicList.splice(currentIndex + 1, 0, row);
      this.$store.commit("updataMusicId", row.id);
      this.$store.commit("updataMusicList", {
        musicList,
        musicListId: this.$store.state.musicListId
      });
    }
  },
  watch: {
    $route() {
      this.getMultimatch();
      this.getSearch();
    }
  }
};
</script>

<style scoped lang="less">
.SearchSong {
  padding: 0 15px;
  .tip {
    font-weight: bold;
    color: rgb(34, 34, 34);
    margin-bottom: 10px;
  }
  .multiMatch {
    width: 100%;
    .matchTitle {
      font-size: 16px;
      color: rgb(34, 34, 34);
      margin: 5px 0;
    }
    .matchContent {
      display: flex;
      .matchResult {
        position: relative;
        width: 300px;
        display: flex;
        align-items: center;
        margin-right: 50px;
        border-radius: 10px;
        background-color: #e5e5e5;
        overflow: hidden;
        .matchCover {
          width: 80px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .matchName {
          margin-left: 20px;
        }
        i {
          position: absolute;
          transform: translateY(-50%);
          right: 15px;
          top: 50%;
        }
      }
    }
  }
}
</style>