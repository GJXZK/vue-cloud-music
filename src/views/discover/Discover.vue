<template>
  <div class="discoverContainer">
    <NavBar :navBarData="navBarData"></NavBar>
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
          {name:'个性推荐',path:'/discovery/recommend'},
          {name:'歌单',path:'/discover/musiclist'},
          {name:'排行榜',path:'/discover/ranking'},
          {name:'歌单',path:'/discover/singer'}
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

</style>