<template>
  <div class="SearchSinger">
    <div class="artist">
      <div class="artist-item" v-for="(item) in artistsList.artists" :key="item.id"  @click="toSingerDetail(item.id)">
        <img :src="item.picUrl + '?param=200y200'" :alt="item.name" />
        <div class="artist-name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearch } from "@/API/index";
export default {
  data() {
    return {
      artistsList: []
    };
  },
  created() {
    console.log(this.$store.state.searchKeyword);
    this.getSearchSinger();
  },
  methods: {
    async getSearchSinger() {
      let type = 100;
      const res = await getSearch(this.$store.state.searchKeyword, type);
      console.log(res.data.result);
      this.artistsList = res.data.result;
    },
    toSingerDetail(id){
      this.$router.push({
        name:'singerdetail',
        params:{id:id}
      })
    }
  }
};
</script>

<style scoped lang="less">
  .SearchSinger{
    .artist{
      display: flex;
      flex-wrap: wrap;
      left: 20px;
      .artist-item{
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