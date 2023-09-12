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
      <el-aside width="200px">
        <el-menu active-text-color="black" router>
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
          <el-menu-item index="/collect">
            <i class="iconfont icon-more"></i>
            <span slot="title">收藏</span>
          </el-menu-item>
          <!-- 每日推荐 -->
          <el-menu-item index="/recommendmusic">
            <i class="iconfont icon-good"></i>
            <span slot="title">每日推荐</span>
          </el-menu-item>
          <!-- user创建的歌单 -->
          <el-menu-item-group v-if="createdMusicList.length!=0">
            <template slot="title">我创建的歌单</template>
            <el-menu-item
              v-for="item in createdMusicList"
              :key="item.id"
              :index="'/musiclistdetail/'+ item.id" 
            >
            <i class="iconfont icon-gedan"></i>
            <span slot="title" >{{ item.name }}</span>
            </el-menu-item>
          </el-menu-item-group>
          <!-- user收藏的歌单 -->
          <el-menu-item-group v-if="collectedMusicList.length!=0" class="menuitemText">
            <template slot="title">我收藏的歌单</template>
            <el-menu-item
              v-for="item in collectedMusicList"
              :key="item.id"
              :index="'/musiclistdetail/'+ item.id" 
            >
            <i class="iconfont icon-gedan"></i>
            <span slot="title" >{{ item.name }}</span>
              
            </el-menu-item>
          </el-menu-item-group>
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
import { getUserPlayListById } from "@/API/index";
export default {
  name: "MyIndex",
  components: {
    BottomControl,
    HeaderBar,
    MusicDetailCard,
  },
  data() {
    return {
      defaultsActive: "",
      createdMusicList: [],
      collectedMusicList: [],
    };
  },
  methods: {
    async getUserPlaylist() {
      let res = await getUserPlayListById();
      res = res.data.playlist;
      let index = res.findIndex((item) => item.subscribed == true);
      this.createdMusicList = res.slice(0, index);
      this.collectedMusicList = res.slice(index);
    },
  },
  mounted(){
    this.getUserPlaylist();
  },
  watch: {
    "$store.state.isLogin"(state) {
      console.log(state);
      if (state) {
        this.getUserPlaylist();
      }
    },
  },
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
  height: calc(100vh - 140px);
}
.el-aside span {
  margin-left: 10px;
}
.el-main {
  padding: 0px;
}
.el-menu-item-group__title{
  font-size: 14px;
  padding: 20px 0 10px 0;
}
.el-menu-item{
  height: 40px;
}
.el-menu-item i {
  color: #909399 !important;
}

</style>
