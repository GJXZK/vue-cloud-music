<template>
  <!-- 
    主界面
    header-bar  头部导航栏 包括
    侧边栏
    主体部分
    底部播放器
  -->
  <el-container>
    <!-- 头部导航栏 -->
    <el-header>
      <HeaderBar></HeaderBar>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="160px">
        <el-menu 
          active-text-color="black" 
          router 
          
          >
          <!-- :default-active="defaultActive" -->
          <!-- 发现音乐 -->
          <el-menu-item index="/discover">
            <i class="iconfont icon-yinle"></i>
            <span slot="title">发现音乐</span>
          </el-menu-item>
          <!-- 视频 -->
          <el-menu-item index="/video">
            <i class="iconfont icon-shipin"></i>
            <span slot="title">视频</span>
          </el-menu-item>
          <!-- 收藏 -->
          <el-menu-item index="/">
            <i class="iconfont icon-more"></i>
            <span slot="title">收藏</span>
          </el-menu-item>
          <!-- 每日推荐 -->
          <el-menu-item index="/recommendmusic">
            <i class="iconfont icon-good"></i>
            <span slot="title">每日推荐</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- 底部音乐控制器 -->
    <BottomControl></BottomControl>
    <MusicDetailCard></MusicDetailCard>
  </el-container>
</template>

<script>
import BottomControl from "@/components/bottomControl/BottomControl";
import HeaderBar from "@/components/HeaderBar/HeaderBar";
import MusicDetailCard from "@/views/musicDetailCard/MusicDetailCard.vue";
export default {
  name: "MyIndex",
  components: {
    BottomControl,
    HeaderBar,
    MusicDetailCard,
  },
  data(){
    return {
      defaultsActive: '',
    }
  }
};
</script>

<style>
.el-header {
  background-color: #ec4141;
  height: 70px !important;
  padding: 0;
  margin: 0;
  z-index: 100;
}
.el-aside {
  background-color: #ccc;
  height: calc(100vh - 140px);
}
.el-main{
  padding: 0px;
}
</style>