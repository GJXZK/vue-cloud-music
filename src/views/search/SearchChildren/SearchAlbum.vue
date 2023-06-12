<template>
  <div class="SearchSinger">
    <div class="album">
      <div class="album-item" v-for="(item) in albumsList.albums" :key="item.id"  @click="toSingerDetail(item.id)">
        <img :src="item.picUrl + '?param=200y200'" :alt="item.name" />
        <div class="album-name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearch } from "@/API/index";
export default {
  data() {
    return {
      albumsList: []
    };
  },
  created() {
    console.log(this.$store.state.searchKeyword);
    this.getSearchSinger();
  },
  methods: {
    async getSearchSinger() {
      let type = 10;
      const res = await getSearch(this.$store.state.searchKeyword, type);
      console.log(res.data.result);
      this.albumsList = res.data.result;
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
    .album{
      display: flex;
      flex-wrap: wrap;
      left: 20px;
      .album-item{
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