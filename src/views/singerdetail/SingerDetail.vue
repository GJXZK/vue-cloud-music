<template>
  <div class="SingerDetail">
    <!-- 头部图片 名字 其他 -->
    <div class="header">
      <div class="left">
        <img :src="singerInfo.artist.avatar+'?param==200y200'" alt />
      </div>
      <div class="right">
        <div class="singerName">{{ singerInfo.artist.name }}</div>
        <div class="singerZuopin">
          <p>单曲数：{{ singerInfo.artist.musicSize }}</p>
          <p>专辑数：{{ singerInfo.artist.albumSize}}</p>
          <p>视频数：{{ singerInfo.artist.mvSize }}</p>
        </div>
      </div>
    </div>
    <!-- 歌曲 专辑 视频 详情 -->
    <div class="container">
      <el-tabs value="first" @tab-click="clickTab">
        <el-tab-pane label="专辑" name="first">
          <div class="topSongs" v-if="singerTopSongs">
            <!-- 热门50首没有id，将歌手id作为listid -->
            <list-table
              :officialListDetailItem="singerTopSongs"
              @handleRowClick="handleRowClick"
              @handleRowDbClick="handleRowDbClick"
              @clickCheckAll="allTopSongs"
              :isCheckAllShow="isCheckAllShow"
              :cover="require('/src/assets/img/topSongsLogo.png')"
              :listId="this.$route.params.id.toString()"
            >
              <div slot="header" class="header">
                <div class="title">热门50首</div>
              </div>
            </list-table>
          </div>
          <!-- <div
            class="albumItemContainer"
            v-if="singerAlbum.length != 0"
            v-infinite-scroll="load"
            :infinite-scroll-disabled="disabled"
            :infinite-scroll-distance="300"
            :infinite-scroll-immediate="false"
          >
            <div class="albumItem" v-for="(item, index) in singerAlbum" :key="index">
              <list-table
                :officialListDetailItem="item.songsObj"
                @handleRowClick="handleRowClick"
                @handleRowDbClick="handleRowDbClick"
                @clickCheckAll="clickListCardItem"
                :cover="item.album.blurPicUrl + '?param=300y300'"
                :listId="item.album.id.toString()"
              >
                <div slot="header" class="header">
                  <div class="title">{{ item.album.name }}</div>
                </div>
              </list-table>
            </div>
          </div>-->
        </el-tab-pane>

        <el-tab-pane label="MV" name="second">
          <!-- <video-list-card
            :videoList="singerMvInfo.mvs"
            :isLoad="true"
            @clickListCardItem="goToVideoDetail"
            @bottomLoad="bottomLoad"
          ></video-list-card>-->
        </el-tab-pane>
        <el-tab-pane label="歌手详情" name="third">
          <div class="singerDesc">{{ singerInfo.artist.briefDesc }}</div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import {
  getSingerDetail,
  getSingerTopSongs,
  getSingerAlbum,
  getSingerMV
} from "@/API/index";
import ListTable from "@/components/listTable/ListTable.vue";
export default {
  data() {
    return {
      singerInfo: {
        artist: { avatar: "" }
      },
      singerTopSongs: {},
      singerAlbum: {},
      singerMV: {},
      isCheckAllShow: true
    };
  },
  components: { ListTable },
  methods: {
    // 获取歌手详情
    async getSingerDetail(id) {
      const res = await getSingerDetail(id);
      console.log("歌手详情");
      this.singerInfo = res.data.data;
      console.log(this.singerInfo);
    },
    // 获取歌手热门歌曲
    async getSingerTopSongs(id) {
      const res = await getSingerTopSongs(id);
      console.log("歌手热门歌曲");
      console.log(res);
      let topSongs = res.data.songs;
      this.singerTopSongs = { topSongs, isOpen: false };
    },
    // 获取歌手专辑
    async getSingerAlbum(id) {
      const res = await getSingerAlbum(id);
      console.log("歌手专辑");
      console.log(res);
      this.singerAlbum = res.data;
    },
    // 歌手MV
    async getSingerMV(id) {
      const res = await getSingerMV(id);
      console.log("歌手MV");
      console.log(res);
      this.singerMV = res.data;
    },

    clickTab() {},
    // isCheckAllShow() {},


    handleRowDbClick(item) {
      item = item.item
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
      console.log(item.id);
      this.$store.commit("updataMusicId", item.id);
      this.$store.commit("updataMusicList", {
        musicList,
        musicListId: this.$store.state.musicListId
      });
    },

    clickCheckAll() {},
    handleRowClick() {},
    allTopSongs() {
      this.singerTopSongs.isOpen = true;
      this.isCheckAllShow = false;
      // 查看全部后再次渲染样式
      setTimeout(() => {
        if (
          this.$store.state.currentRowInfo.singerId == this.$route.params.id
        ) {
          this.handleViewDOM(
            this.$store.state.musicId,
            this.$store.state.musicListId
          );
        }
      }, 500);
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.getSingerDetail(id);
    this.getSingerAlbum(id);
    this.getSingerTopSongs(id);
    this.getSingerMV(id);
  }
};
</script>

<style scoped lang="less">
.SingerDetail {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  .header {
    display: flex;
    width: 100%;
    padding: 30px;
    .left {
      border-radius: 20px;
      overflow: hidden;
      height: 200px;
      width: 200px;
      img {
        width: 100%;
      }
    }
    .right {
      margin-left: 30px;
      .singerName {
        padding: 20px;
        font-size: 26px;
        color: rgb(55, 55, 55);
      }
      .singerZuopin {
        display: flex;
        p {
          padding: 20px;
        }
      }
    }
  }
  .container {
    width: 90%;
    margin: auto;
    .singerDesc {
      height: 500px;
    }
  }
}
</style>