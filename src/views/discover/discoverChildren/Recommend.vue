<template>
  <!--  个性推荐模块  -->
  <div class="recommend">
    <!-- 轮播图 -->
    <div class="swiperbox">
      <el-carousel :interval="5000"  type="card" height="222px">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.imageUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 推荐歌单 -->
    <div class="recommendMusicList">
        <h3>推荐歌单<i class="iconfont icon-arrow-right-bold"></i></h3>
        <listCard :musicLists="musicLists"></listCard>
    </div>
    <!-- 新歌速递 -->
    <div class="recommendMusicList">
        <h3>新歌速递<i class="iconfont icon-arrow-right-bold"></i></h3>
        <musicCard :newSongs="newSongs"></musicCard>
    </div>
  </div>
</template>

<script>
import {getBannerList,getNewsong, getMusicList} from '@/API/index'
import listCard from '@/components/listCard/listCard'
import musicCard from '@/components/musicCard/musicCard'
export default {
  name: "my-recommend",
  data(){
    return{
        bannerList:[],
        newSongs:[],
        musicLists:[]
    }
  },
  components:{listCard,musicCard},
  created(){
    this.getBannerList()
    this.getNewsong()
    this.getMusicList()
  },
  methods:{
    async getBannerList(){
      const res = await getBannerList()
      this.bannerList=res.data.banners
    },
    async getNewsong(){
        const res = await getNewsong()
        this.newSongs=res.data.result
    },
    async getMusicList(){
        const res = await getMusicList()
        this.musicLists=res.data.result
    }
  }
};
</script>

<style lang="less" scoped>
.recommend {
  .swiperbox {
    margin: 10px auto;
    img{
        width: 100%;
    }
  }
}
.el-carousel {
  margin: auto;
  width: 1200px;
}
.el-carousel__item{
    border-radius: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>