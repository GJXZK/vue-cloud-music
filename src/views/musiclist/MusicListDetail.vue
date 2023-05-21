<template>
  <div class="musicListDetail">
    <!-- 歌单信息 -->
    <div class="listInfo">
      <!-- 歌单封面 -->
      <div class="listAvatar">
        <img :src="musicListDetail.coverImgUrl" alt />
      </div>
      <div class="right">
        <!-- 标题 -->
        <div class="title">
          <div class="titleTag">歌单</div>
          <div class="titleContent">{{ musicListDetail.name }}</div>
        </div>
        <!-- 用户信息 -->
        <div class="user">
          <div class="userAvatar">
            <img :src="musicListDetail.creator.avatarUrl" alt />
          </div>
          <div
            class="userName"
            @click="
              $router.push({
                name: 'personal',
                params: { uid: musicListDetail.creator.userId },
              })
            "
          >{{ musicListDetail.creator.nickname }}</div>
          <div class="createTime">{{ musicListDetail.createTime | showDate }}创建</div>
        </div>
        <!-- 操作按钮 播放全部-->
        <div class="buttons">
          <div class="buttonItem playAll" @click="playAll">
            <i class="iconfont icon-bofang playAll"></i>
            <span>播放全部</span>
          </div>
          <div class="buttonItem" v-if="!isCreated" @click="collectList">
            <!-- <i class="iconfont icon-xihuan" :class="isSub ? 'red' : ''"></i> -->
            <!-- <span>{{ isSub ? "已收藏" : "收藏" }}</span> -->
          </div>
          <div class="buttonItem">
            <i class="iconfont icon-zhuanfa"></i>
            <span>分享</span>
          </div>
        </div>
        <!-- 标签 -->
        <div class="tags">
          标签：
          <div class="tagItem" v-for="(item, index) in musicListDetail.tags" :key="index">{{ item }}</div>
          <div v-if="musicListDetail.tags.length == 0">暂无标签</div>
        </div>
        <!-- 歌曲列表的歌曲数量和播放量 -->
        <div class="otherInfo">
          <div class="musicNum">歌曲 : {{ musicListDetail.trackCount | handleNum }}</div>
          <div class="playCount">播放 : {{ musicListDetail.playCount | handleNum }}</div>
        </div>
        <div class="desc">
          简介 :
          {{
          musicListDetail.description
          ? musicListDetail.description
          : "暂无简介"
          }}
        </div>
      </div>
    </div>
    <!-- 歌单详情 -->
    <div class="musicList">
      <el-tabs value="first" @tab-click="clickTab">
        <el-tab-pane label="歌曲列表" name="first">
          <!-- 表格 -->
          <el-table
            :data="musicListDetail.tracks"
            size="medium"
            style="width: 100%"
            @row-dblclick="clickRow"
            @cell-click="clickCell"
            highlight-current-row
            stripe
            lazy
            :row-key="
                (row) => {
                  return row.id;
                }
              "
            v-infinite-scroll="this.$store.state.isLogin ? loadMore : ''"
            :infinite-scroll-disabled="scrollLoadDisabled"
            :infinite-scroll-distance="1500"
            :infinite-scroll-immediate="false"
          >
            <el-table-column label width="40" type="index" :index="handleIndex"></el-table-column>
            <el-table-column label width="23">
              <!-- 下载按钮 -->
              <i class="iconfont icon-download"></i>
            </el-table-column>
            <el-table-column prop="name" label="音乐标题" min-width="350"></el-table-column>
            <el-table-column prop="ar[0].name" label="歌手" min-width="120"></el-table-column>
            <el-table-column prop="al.name" label="专辑" min-width="170"></el-table-column>
            <el-table-column prop="dt" label="时长" min-width="100"></el-table-column>
          </el-table>
          <div class="loadMore" v-if="isMore && !this.$store.state.isLogin">登陆后查看更多音乐</div>
          <div class="placeholder" v-else></div>
          <!-- <div class="placeholder"></div> -->
        </el-tab-pane>
        <el-tab-pane label="评论" name="second">
          <div class="commentList" v-if="comments.comments" v-loading="isCommentLoading">
            <!-- 精彩评论 -->
            <comment
              :commentType="'musicList'"
              :comments="comments.hotComments"
              :commentId="musicListDetail.id + ''"
              @getComment="getMusicListComments"
              @scrollToComment="scrollToComment"
              v-if="comments.hotComments"
              ref="hotComments"
            >
              <div slot="title">精彩评论</div>
            </comment>
            <!-- 最新评论 -->
            <comment
              :comments="comments.comments"
              :commentType="'musicList'"
              :commentId="musicListDetail.id + ''"
              :isHotComment="comments.hotComments ? false : true"
              @getComment="getMusicListComments"
              @scrollToComment="scrollToComment"
              @transToHotComment="
                  (info) =>
                    $refs.hotComments.floorComment(info.commentId, info.nickName)
                "
            >
              <div slot="title">热门评论</div>
            </comment>
          </div>
          <!-- 分页 -->
          <div class="page" v-show="comments.comments && comments.comments.length != 0">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="comments.total"
              small
              :page-size="50"
              :current-page="currentCommentPage"
              @current-change="commentPageChange"
            ></el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { handleNum, formatDate, handleMusicTime } from "@/plugins/utils";
import { getMusicListDetailById, getMusicListComment } from "@/API";
import Comment from "@/components/comment/Comment";
export default {
  data() {
    return {
      musicListDetail: {
        creator: {},
        tags: {}
      },
      comments: {},
      isCreated: false,
      currentCommentPage: 1,
      // 是否禁止滚动加载
      scrollLoadDisabled: false,
      isCommentLoading:false,
      isMore:false,
    };
  },
  components: {
    Comment
  },

  methods: {
    // 获取歌单的信息  用于歌单详情上半部分 介绍歌单
    async getMusicListDetail() {
      var res = await getMusicListDetailById(this.$route.params.id);
      this.musicListDetail = res.data.playlist;
      console.log(res);
      this.musicListDetail.tracks.forEach((item, index) => {
        this.musicListDetail.tracks[index].dt = handleMusicTime(item.dt);
      });
    },
    // 获取歌单评论
    async getMusicListComments() {
      var res = await getMusicListComment(
        this.$route.params.id,
        this.currentCommentPage
      );
      this.comments = res.data;
      console.log(this.comments);
    },
    //
    clickTab() {},
    clickBarItem(path) {
      this.$router.push(path);
    },
    async clickRow(row) {
      console.log(row);
      // 将musicId提交到vuex中 供bottomControl查询歌曲url和其它操作
      this.$store.commit("updataMusicId", row.id);
      // 如果歌单发生变化,则提交歌单到vuex
      if (this.musicListDetail.id != this.$store.state.musicListId) {
        // 将歌单传到vuex
        this.$store.commit("updataMusicList", {
          musicList: this.musicListDetail.tracks,
          musicListId: this.musicListDetail.id
        });
      }
    },
    playAll() {},
    collectList() {},
    scrollToComment() {},
    clickCell(){},
    commentPageChange(){},
     // 事件函数
     handleIndex(index) {
      // console.log(index);
      index += 1;
      if (index < 10) {
        return "0" + index;
      } else {
        return index;
      }
    },

  },
  mounted() {
    this.getMusicListDetail();
    this.getMusicListComments();
  },
  filters: {
    handleNum,
    showDate(value) {
      // 1、先将时间戳转成Date对象
      const date = new Date(value);

      // 2、将date进行格式化
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped lang="less">
.musicListDetail {
  overflow-y: scroll;
  height: calc(100vh - 140px);
  .listInfo {
    display: flex;
    padding: 25px 25px;
    .listAvatar {
      width: 200px;
      height: 200px;
      overflow: hidden;
      border-radius: 10px;
      position: relative;
      img {
        width: 120%;
      }
    }
    .listAvatar::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      background: url("@/assets/img/imgLoading.png") no-repeat;
      background-size: contain;
      z-index: -1;
    }
    .right {
      width: calc(100% - 200px);
      margin-left: 20px;
      font-size: 12px;
      .title {
        display: flex;
        .titleTag {
          font-size: 14px;
          color: #ec4141;
          border: 1px solid #ec4141;
          padding: 1px 2px;
          border-radius: 2px;
          margin-right: 5px;
          transform: scale(0.8);
        }
        .titleContent {
          font-size: 20px;
          font-weight: 600;
          color: #373737;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 90%;
        }
      }
      .user {
        display: flex;
        padding-top: 10px;
        .userAvatar {
          height: 30px;
          width: 30px;
          margin-right: 8px;
          img {
            width: 100%;
            border-radius: 50%;
          }
        }
        .userName {
          height: 25px;
          line-height: 25px;
          font-size: 20px;
          color: #6292c2;
        }
        .createTime {
          padding-left: 10px;
          height: 25px;
          line-height: 25px;
        }
      }
      .buttons {
        padding: 10px 0;
        .buttonItem {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 40px;
          line-height: 40px;
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          i {
            font-size: 16px;
          }
          span {
            padding-left: 10px;
            line-height: 30px;
          }
        }
        .playAll {
          color: #fff;
          background-color: #ec4141;
        }
      }
      .tags {
        display: flex;
        .tagItem {
          padding: 0 10px;
          color: #6292c2;
        }
      }
      .desc {
        font-size: 12px;
        // transform: scale(0.9);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
  .musicList {
    margin: -20px 30px;
  }
}
</style>