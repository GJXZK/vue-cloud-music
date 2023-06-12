<template>
  <div class="SearchSinger">
    <div class="playlists">
      <div class="playlists-item" v-for="(item) in playlistsList.playlists" :key="item.id"  @click="toSingerDetail(item.id)">
        <img :src="item.coverImgUrl + '?param=200y200'" :alt="item.name" />
        <div class="playlists-name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearch } from "@/API/index";
export default {
  data() {
    return {
      playlistsList: []
    };
  },
  created() {
    console.log(this.$store.state.searchKeyword);
    this.getSearchSinger();
  },
  methods: {
    async getSearchSinger() {
      let type = 1000;
      const res = await getSearch(this.$store.state.searchKeyword, type);
      console.log(res.data.result);
      this.playlistsList = res.data.result;
    },
    toSingerDetail(id){
      this.$router.push({
        name: "musiclistdetail",
        params: { id: id }
      })
    }
  }
};
</script>

<style scoped lang="less">
  .SearchSinger{
    .playlists{
      display: flex;
      flex-wrap: wrap;
      left: 20px;
      .playlists-item{
        margin: 20px;
        width: 200px;
        img{
          border-radius: 20px;
          overflow: hidden;
        }
      }
    }
  }
</style>