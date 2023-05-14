<template>
  <div class="searchContainer">
    <NavBar :navBarData="navBarData" @clickBarItem="clickBarItem"></NavBar>
    <router-view class="search"></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBar.vue";
export default {
  name: "mySearch",
  components: { NavBar },
  created(){
    console.log(this.$route.params.keyword);
  },
  data() {
    return {
      navBarData: [
        { name: "单曲", path: `/search/searchsong/${this.$route.params.keyword}` },
        { name: "歌手", path: `/search/searchsinger/${this.$route.params.keyword}`},
        { name: "歌单", path: `/search/searchmusiclist/${this.$route.params.keyword}`},
        { name: "视频", path: `/search/searchvideo/${this.$route.params.keyword}` },
        { name: "专辑", path: `/search/searchalbum/${this.$route.params.keyword}` }
      ]
    };
  },
  methods: {
    clickBarItem(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.search{
  margin: auto;
  overflow: scroll;
  height: calc(100vh - 200px);
  padding: 0 15px;
}
</style>