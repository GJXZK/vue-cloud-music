<template>
  <div class="searchContainer">
    <NavBar :navBarData="navBarData" @clickBarItem="clickBarItem"></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBar.vue";
export default {
  name: "mySearch",
  components: { NavBar },
  data() {
    return {
      navBarData: [
        { name: "单曲", path: "/search/searchsong" },
        { name: "歌手", path: "/search/searchsinger"},
        { name: "歌单", path: "/search/searchmusiclist" },
        { name: "视频", path: "/search/searchvideo" },
        { name: "专辑", path: "/search/searchalbum" }
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

<style>
</style>