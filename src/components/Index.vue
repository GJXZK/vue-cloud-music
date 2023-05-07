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
    <!-- 底部音乐控制器 -->
    <BottomControl></BottomControl>
  </el-container>
</template>

<script>
import BottomControl from '@/components/bottomControl/BottomControl'
import HeaderBar from '@/components/HeaderBar/HeaderBar'
export default {
    name:'MyIndex',
    components:{
        BottomControl,
        HeaderBar
    }
}
</script>

<style>
.el-header {
  background-color: #ec4141;
  height: 50px !important;
  padding: 0;
  margin: 0;
  z-index: 100;
}

</style>