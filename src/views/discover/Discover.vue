<template>
  <div class="discoverContainer">
    <NavBar :navBarData="navBarData" @clickBarItem="clickBarItem"></NavBar>
    <router-view class="discover"></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBar";
export default {
    name:"myDiscovery",
    components:{
      NavBar
    },
    data(){
      return {
        navBarData:[
          {name:'个性推荐',path:'/discover/recommend'},
          {name:'歌单',path:'/discover/musiclist'},
          {name:'排行榜',path:'/discover/ranking'},
          {name:'歌手',path:'/discover/singer'}
        ]
      }
    },
    methods:{
      clickBarItem(path){
        this.$router.push(path);
      }
    }
}
</script>

<style>
.discoverContainer {
  overflow: hidden;
  padding: 0 !important;
  height: 100%;
}
.discover{
  margin: auto;
  overflow: scroll;
  height: calc(100vh - 200px);
  padding: 0 15px;
}
</style>