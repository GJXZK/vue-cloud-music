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
  data() {
    return {
      // 死数据  在搜索一次后 在搜索无法转变为新搜索的内容 是路由参数无法转变 bug
      navBarData: [
        { name: "单曲", path: `mysearch-song` },
        { name: "歌手", path: `mysearch-singer`},
        { name: "歌单", path: `mysearch-musiclist`},
        { name: "视频", path: `mysearch-video` },
        { name: "专辑", path: `mysearch-album` }
      ]
    };
  },
  methods: {
    clickBarItem(NewPath) {
      if (NewPath != this.$route.name) {
        this.$router.push({
          name:NewPath,
          params:{
            keyword:this.$store.state.searchKeyword
          }
        });
      }
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