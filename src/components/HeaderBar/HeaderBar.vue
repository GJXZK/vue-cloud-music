<template>
  <!-- 头部导航栏 -->
  <div class="headerBar">
    <!-- 头部导航栏 左侧 logo-->
    <div class="left">
      <img src="@/assets/img/logo.png" alt />
    </div>
    <!-- 头部导航栏 中间 上一步 下一步 搜索-->
    <div class="center">
      <div class="buttons">
        <i class="iconfont icon-arrow-left-bold back" @click="$router.go(-1)"></i>
        <i class="iconfont icon-arrow-right-bold forward" @click="$router.go(1)"></i>
      </div>
      <!-- 搜索 -->
      <div class="search">
        <!-- 搜索栏 vant -->
        <van-search
          v-model="searchKeyWord"
          placeholder="请输入搜索关键词"
          background="#ec4141"
          shape='round'
          @focus="SearchFocus"
          @search="onSubmit"
        />
        <!-- 热搜bang -->
        <div class="hotSearch" v-if="!searchSuggestList">
          <div class="hotSearchTitle">热搜榜</div>
            <!-- <div class="hotSearchItem"
                 v-for="(item, index) in hotSearchList"
                 :key="index"
                 @click="clickHotSearchItem(item.searchWord)">
              <div class="hotSearchIndex"
                   :class="index < 3 ? 'topThree' : ''">
                {{ index + 1 }}
              </div>
              <div class="hotSearchInfo">
                <div class="hotSearchWord"
                     :class="index < 3 ? 'hotSearchWordTopThree' : ''">
                  {{ item.searchWord }}
                </div>
                <div class="hotSearchContent">{{ item.content }}</div>
              </div>
            </div> -->
        </div>
      </div>
      
    </div>
    <!-- 头部导航栏 右侧 登录 -->
    <div class="right">
      <div class="user">
        <div class="avatar">
          <!-- 登录框 -->
          <el-popover
            placement="bottom"
            width="300"
            trigger="click"
            v-model="isPopoverShow"
            v-if="!userInfo.avatarUrl"
          >
            <login
              v-if="isPopoverShow"
              :isRegisteredShow.sync="isRegisteredShow"
              @getUserInfo="(info) => { userInfo = info; isPopoverShow = false; }"
            />
            <img src="@/assets/img/test.jpg" alt slot="reference" />
          </el-popover>
          <img :src="userInfo.avatarUrl" alt slot="reference" v-else />
          <!-- @click="goToPersonal"  -->
        </div>
        <div class="userName" v-if="userInfo.nickname">{{ userInfo.nickname }}</div>
        <div class="userName" v-else>点击头像登录</div>
      </div>
    </div>
    <!-- 注册界面 -->
    <Registered :isDialogShow="isRegisteredShow" @closeRegistered="closeRegistered"></Registered>
  </div>
</template>

<script>
// import { handleMusicTime } from 'plugins/utils';
import Registered from "@/components/registered/Registered.vue";
import login from "@/components/login/login";
import { request } from "@/API/request";
// 节流定时器名称
// let timer;
export default {
  components: { Registered, login },
  // components:{login},
  name: "HeaderBar",
  data() {
    return {
      userInfo: {},
      isPopoverShow: false,
      // 是否显示searchPop
      isSearchPopShow: false,
      // 热搜列表数据
      hotSearchList: [],
      // 搜索建议列表
      searchSuggestList: {},
      // 是否显示注册框
      isRegisteredShow: false,
      // 搜索关键字
      searchKeyWord: "",
    };
  },
  methods: {
    // 获取当前用户信息
    async getCurrentUserInfo() {
      var timestamp = Date.parse(new Date());
      let res = await request("/user/account", {
        timestamp
      });
      // console.log(res);
      if (res.data.profile != null) {
        this.userInfo = res.data.profile;
        // 更新登录状态
        this.$store.commit("updataLoginState", true);
        // 更新当前用户id
        // this.$store.commit("updateCurrentUserId", res.data.profile.userId);
        // 将请求到的用户id存入localstorage
        window.localStorage.setItem("userId", res.data.profile.userId);
      } else {
        // 未登录
        this.$store.commit("updataLoginState", false);
        // 如果localstorage存有userId就清除
        if (window.localStorage.getItem("userId")) {
          window.localStorage.removeItem("userId");
        }
      }
    },
    closeRegistered() {
      this.isRegisteredShow = false;
    },
    // 搜索框获取焦点
    SearchFocus(){
      
    },
    // 输入内容后 提交搜索
    onSubmit(){
      if(this.searchKeyWord !=''){
        this.goSearch()
      }
    },
    goSearch() {
      console.log(this.searchKeyWord)
      this.$router.push({
        name:'mysearch',
        params:{keyword:this.searchKeyWord},
        // query:{
        //   keyword:this.searchKeyWord
        // }
      })
    }
  },
  async created() {
    // this.getHotSearch();
    this.getCurrentUserInfo();

    if (document.cookie.search("MUSIC_U=") != -1) {
      // 如果本地存有cookie，则先暂时判定为已登录，
      // 以解决登录状态下在视频页等需要登录的页面刷新因为登录状态默认为false，
      // 需要等待获取用户信息请求结束后更新用户状态才有进入视频页的权限，导致被返回到发现音乐页面，体验很差
      // 后面获取用户信息将再次确认用户是否登录
      this.$store.commit("updataLoginState", true);
    }
  }
};
</script>

<style lang="less" scoped>
@import "./HeaderBar-element.css";
.headerBar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  position: relative;
  z-index: 30000;
  .left {
    width: 110px;
    margin: 0 50px 0 10px;
    img {
      width: 100%;
    }
  }
  .center {
    display: flex;
    align-items: center;
    .buttons {
      color: rgb(235, 235, 235);
      height: 22px;
      i {
        background-color: #e13e3e;
        font-size: 12px;
        transform: scale(0.8);
        padding: 5px;
        height: 22px;
        line-height: 11px;
        width: 22px;
        border-radius: 50%;
        margin: 0 3px;
      }
    }
    .search {
      width: 300px;
      height: 50px;
      margin-left: 20px;
      position: relative;
      .van-search{
        padding: 8px  !important;
      }
      .hotSearch{
        position: absolute;
        top: 47px;
        left: -50px;
        width: 400px;
        height: 500px;
        background-color: #eceaea;
        border-radius: 6px;
      }
    }
  }
  .right {
    display: flex;
    position: absolute;
    right: 50px;
    top: 0;
    line-height: 70px;
  }

  .user {
    display: flex;
    align-items: center;
  }

  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 7px;
    cursor: pointer;
    line-height: 30px;
  }

  .avatar img {
    width: 100%;
  }

  .userName {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.85);
    width: 100px;
  }

  .loginButton {
    width: 100%;
    text-align: center;
  }

  .loginButton .el-button {
    width: 200px;
  }

  .el-form /deep/ .el-form-item__label {
    font-size: 13px !important;
  }

  .hotSearchTitle {
    font-size: 13px;
    margin: 10px 0 5px 20px;
  }

  .hotSearchItem {
    display: flex;
    align-items: center;
    padding: 6.5px 15px;
    cursor: pointer;
    z-index: 100000000000;
  }

  .hotSearchItem:hover {
    background-color: #f2f2f2;
  }

  .hotSearchIndex {
    margin-right: 15px;
    color: #aaa;
  }

  .topThree {
    color: #e13e3e;
  }

  .hotSearchWord {
    font-size: 12px;
    color: rgb(51, 51, 51);
  }

  .hotSearchWordTopThree {
    font-weight: 600;
    color: black;
  }

  .hotSearchContent {
    font-size: 12px;
    transform: scale(0.9) translateX(-5%);
  }

  .searchSuggest {
    font-size: 12px;
  }

  .searchSuggestItemTitle {
    background-color: #f5f5f7;
    padding: 4px 8px;
  }

  .searchSuggestItemTitle i {
    font-size: 15px;
  }

  .searchSuggestItem {
    cursor: pointer;
  }

  .suggestItemDetail {
    padding: 4px 27px;
    font-size: 12px;
  }

  .suggestItemDetail:hover {
    background-color: #f2f2f2;
  }
}
</style>