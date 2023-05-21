<template>
  <!-- 歌曲详情页  -->
  <!-- 
        点击底部音乐封面 打开 左上角做关闭按钮 
        展示歌曲信息 旋转碟片  滚动歌词  热门评论
        通过改变界面到底部的距离  实现显示和隐藏 需要获取音乐详情 歌词  
  -->
  <div class="musicDetailCard" :class="[
        isMusicDetailCardShow ? '' : 'hide',
       ]">
    <div class="closeCard" @click="colseCard">
      <i class="iconfont icon-arrow-down-bold"></i>
    </div>
    <div class="musicDetailContainer" v-if="musicInfo.name">
        <h1>音乐详情</h1>
    </div>
    <div class="tip" v-else>暂无歌曲信息</div>
  </div>
</template>

<script>
import {getLyric , getMusicComments} from "@/API/index"
export default {
  data() {
    return {
      // 是否显示歌曲详情界面
      isMusicDetailCardShow: false,
      musicInfo:{
        // name:"AAA"
      },
      lyric:[[0,"正在加载歌词"]]
    };
  },
  methods: {
    colseCard() {
      this.$store.commit("changeMusicDetailCardState");
    },
    async getLyric(id) {
        let res = await getLyric(id)
        console.log(res);
    },
    async getMusicComment(id){
        let res = await getMusicComments(id)
        console.log(res);
    }
  },
  watch: {
    // 当Vuex中的 isMusicDetailCardShow 发生变化 
    "$store.state.isMusicDetailCardShow"(isMusicDetailCardShow) {
      this.isMusicDetailCardShow = isMusicDetailCardShow;
      //  打开详情界面后 获取歌词 评论 
      //  前提是 界面是打开状态 有正在播放的歌曲 
      if(isMusicDetailCardShow == true && this.$store.state.musicId != "") {
        console.log("获取歌词")
        this.getLyric(this.$store.state.musicId)
        this.getMusicComment(this.$store.state.musicId)
      }   
      
    },
    // 当Vuex中的 musicId 发生变化，获取评论 歌词
    "$store.state.musicId"(musicId){
        this.lyric = [[0,"正在加载歌词"]];
        this.getLyric(musicId)
        this.getMusicComment(this.$store.state.musicId)
        this.musicInfo=this.$store.state.musicList[this.$store.state.currentIndex];
    }
  },
  created(){
    
  }
};
</script>

<style scoped lang="less">
.musicDetailCard {
  position: fixed;
  width: 100%;
  height: calc(100vh - 70px);
  bottom: 70px;
  z-index: 1000;
  background-color: #fff;
  transition: bottom 0.5s ease;
//   关闭音乐详情页
  .closeCard {
    position: absolute;
    left: 40px;
    top: 20px;
    font-size: 24px !important;
  }
//   音乐详情页主体
  .musicDetailContainer{
    position: absolute;
    top: 40px;
  }
  .tip{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

}
.hide {
  bottom: calc(-100vh + 70px);
}
</style>