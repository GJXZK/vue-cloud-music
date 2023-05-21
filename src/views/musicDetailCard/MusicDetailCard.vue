<template>
  <div class="musicDetailCard"
       :class="[
        isMusicDetailCardShow ? '' : 'hide',
       ]"
       >
    <div class="closeCard" @click="colseCard">
        <i class="iconfont icon-arrow-down-bold"></i>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // 是否显示歌曲详情界面
            isMusicDetailCardShow:false,
        }
    },
    methods:{
        colseCard(){
            this.$store.commit("changeMusicDetailCardState");
        }
    },
    watch:{
        "$store.state.isMusicDetailCardShow"(isMusicDetailCardShow){
            this.isMusicDetailCardShow = isMusicDetailCardShow
        }
    }
}
</script>

<style>
.musicDetailCard{
    position: fixed;
    width: 100%;
    height: calc(100vh - 70px);
    bottom: 70px;
    z-index: 1000;
    background-color: pink;
    transition: bottom 0.5s ease;
    /* transition: 2s; */
    
}
.hide{
    
    bottom: calc(-100vh + 70px);
}
</style>