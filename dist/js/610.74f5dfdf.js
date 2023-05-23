"use strict";(self["webpackChunkvue_cloud"]=self["webpackChunkvue_cloud"]||[]).push([[610],{8610:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});s(7658);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"musicListDetail"},[e("div",{staticClass:"listInfo"},[e("div",{staticClass:"listAvatar"},[e("img",{attrs:{src:t.musicListDetail.coverImgUrl,alt:""}})]),e("div",{staticClass:"right"},[e("div",{staticClass:"title"},[e("div",{staticClass:"titleTag"},[t._v("歌单")]),e("div",{staticClass:"titleContent"},[t._v(t._s(t.musicListDetail.name))])]),e("div",{staticClass:"user"},[e("div",{staticClass:"userAvatar"},[e("img",{attrs:{src:t.musicListDetail.creator.avatarUrl,alt:""}})]),e("div",{staticClass:"userName",on:{click:function(e){return t.$router.push({name:"personal",params:{uid:t.musicListDetail.creator.userId}})}}},[t._v(t._s(t.musicListDetail.creator.nickname))]),e("div",{staticClass:"createTime"},[t._v(t._s(t._f("showDate")(t.musicListDetail.createTime))+"创建")])]),e("div",{staticClass:"buttons"},[e("div",{staticClass:"buttonItem playAll",on:{click:t.playAll}},[e("i",{staticClass:"iconfont icon-bofang playAll"}),e("span",[t._v("播放全部")])]),t.isCreated?t._e():e("div",{staticClass:"buttonItem",on:{click:t.collectList}}),t._m(0)]),e("div",{staticClass:"tags"},[t._v(" 标签 : "),t._l(t.musicListDetail.tags,(function(s,i){return e("div",{key:i,staticClass:"tagItem"},[t._v(t._s(s))])})),0==t.musicListDetail.tags.length?e("div",[t._v("暂无标签")]):t._e()],2),e("div",{staticClass:"otherInfo"},[e("div",{staticClass:"musicNum"},[t._v("歌曲 : "+t._s(t._f("handleNum")(t.musicListDetail.trackCount)))]),e("div",{staticClass:"playCount"},[t._v("播放 : "+t._s(t._f("handleNum")(t.musicListDetail.playCount)))])]),e("div",{staticClass:"desc"},[t._v(" 简介 : "+t._s(t.musicListDetail.description?t.musicListDetail.description:"暂无简介")+" ")])])]),e("div",{staticClass:"musicList"},[e("el-tabs",{attrs:{value:"first"},on:{"tab-click":t.clickTab}},[e("el-tab-pane",{attrs:{label:"歌曲列表",name:"first"}},[e("el-table",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:this.$store.state.isLogin?t.loadMore:"",expression:"this.$store.state.isLogin ? loadMore : ''"}],staticStyle:{width:"100%"},attrs:{data:t.musicListDetail.tracks,size:"medium","highlight-current-row":"",stripe:"",lazy:"","row-key":t=>t.id,"infinite-scroll-disabled":t.scrollLoadDisabled,"infinite-scroll-distance":1500,"infinite-scroll-immediate":!1},on:{"row-dblclick":t.clickRow,"cell-click":t.clickCell}},[e("el-table-column",{attrs:{label:"",width:"40",type:"index",index:t.handleIndex}}),e("el-table-column",{attrs:{label:"",width:"23"}},[e("i",{staticClass:"iconfont icon-download"})]),e("el-table-column",{attrs:{prop:"name",label:"音乐标题","min-width":"350"}}),e("el-table-column",{attrs:{prop:"ar[0].name",label:"歌手","min-width":"120"}}),e("el-table-column",{attrs:{prop:"al.name",label:"专辑","min-width":"170"}}),e("el-table-column",{attrs:{prop:"dt",label:"时长","min-width":"100"}})],1),t.isMore&&!this.$store.state.isLogin?e("div",{staticClass:"loadMore"},[t._v("登陆后查看更多音乐")]):e("div",{staticClass:"placeholder"})],1),e("el-tab-pane",{attrs:{label:"评论",name:"second"}},[t.comments.comments?e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isCommentLoading,expression:"isCommentLoading"}],staticClass:"commentList"},[t.comments.hotComments?e("comment",{ref:"hotComments",attrs:{commentType:"musicList",comments:t.comments.hotComments,commentId:t.musicListDetail.id+""},on:{getComment:t.getMusicListComments,scrollToComment:t.scrollToComment}},[e("div",{attrs:{slot:"title"},slot:"title"},[t._v("精彩评论")])]):t._e(),e("comment",{attrs:{comments:t.comments.comments,commentType:"musicList",commentId:t.musicListDetail.id+"",isHotComment:!t.comments.hotComments},on:{getComment:t.getMusicListComments,scrollToComment:t.scrollToComment,transToHotComment:e=>t.$refs.hotComments.floorComment(e.commentId,e.nickName)}},[e("div",{attrs:{slot:"title"},slot:"title"},[t._v("热门评论")])])],1):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:t.comments.comments&&0!=t.comments.comments.length,expression:"comments.comments && comments.comments.length != 0"}],staticClass:"page"},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.comments.total,small:"","page-size":50,"current-page":t.currentCommentPage},on:{"current-change":t.commentPageChange}})],1)])],1)],1)])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"buttonItem"},[e("i",{staticClass:"iconfont icon-zhuanfa"}),e("span",[t._v("分享")])])}],m=s(3214),n=s(6037),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hotComments"},[""!=t.commentType&&"music"!=t.commentType&&t.isHotComment?e("div",{staticClass:"comments"},[e("el-input",{staticClass:"commentArea",attrs:{type:"textarea",maxlength:"140","show-word-limit":"",placeholder:"留下你的评论"},on:{input:t.inputComment},model:{value:t.commentInput,callback:function(e){t.commentInput=e},expression:"commentInput"}}),e("div",{staticClass:"submitCommentButton"},[e("el-button",{staticClass:"submitComment",attrs:{size:"mini",round:""},on:{click:function(e){t.commentMode?t.submitComment():t.submitFloorComment()}}},[t._v("评论")])],1)],1):""!=t.commentType&&"music"==t.commentType?e("div",{staticClass:"musicComment"},[e("el-button",{staticClass:"commentCardSwitch",attrs:{size:"mini",round:""},on:{click:t.openDialog}},[e("i",{staticClass:"iconfont icon-ziyuan"}),t._v(" 发表我的音乐评论 ")]),e("el-dialog",{staticClass:"commentDialog",attrs:{visible:t.isCommentDialogShow,width:"400px","append-to-body":""},on:{close:t.closeCommentDialog}},[e("div",{staticClass:"musicTitle"},[t._v("歌曲："+t._s(t.musicTitle))]),e("el-input",{staticClass:"commentArea musicCommentArea",attrs:{type:"textarea",maxlength:"140","show-word-limit":"",placeholder:"留下你的评论"},on:{input:t.inputComment},model:{value:t.commentInput,callback:function(e){t.commentInput=e},expression:"commentInput"}}),e("div",{staticClass:"submitCommentButton"},[e("el-button",{staticClass:"submitComment musicSubmitComment",attrs:{size:"mini",round:""},on:{click:function(e){t.commentMode?t.submitComment():t.submitFloorComment()}}},[t._v("评论")])],1)],1)],1):t._e(),e("div",{staticClass:"commentHeader"},[t._t("title")],2),t._l(t.comments,(function(s,i){return e("div",{key:i,staticClass:"commentItem"},[e("div",{staticClass:"commentCreatorAvatar"},[e("img",{attrs:{src:s.user.avatarUrl+"?param=100y100",alt:""},on:{click:function(e){return t.goToPersonal(s.user.userId)}}})]),e("div",{staticClass:"commentMain"},[e("div",{staticClass:"commentContent"},[e("span",{staticClass:"commentUserNickName",on:{click:function(e){return t.goToPersonal(s.user.userId)}}},[t._v(t._s(s.user.nickname)+": ")]),e("span",[t._v(t._s(s.content))])]),e("div",{staticClass:"replied"},t._l(s.beReplied,(function(i,o){return e("div",{key:o,staticClass:"repliedItem"},[e("span",{staticClass:"repliedUser",on:{click:function(e){return t.goToPersonal(s.user.userId)}}},[t._v("@"+t._s(i.user.nickname)+": ")]),e("span",{staticClass:"repliedContent"},[t._v(t._s(i.content))])])})),0),e("div",{staticClass:"commentBottom"},[e("div",{staticClass:"commentCreatedTime"},[t._v(t._s(t._f("showDate")(s.time)))]),e("div",{staticClass:"commentButtons"},[e("div",{class:s.liked?"likeCurrentComment":"",on:{click:function(e){return t.likeCurrentComment(s.liked,s.commentId)}}},[e("i",{staticClass:"iconfont icon-good"}),t._v(" "+t._s(s.likedCount)+" ")]),t._m(0,!0),e("div",[e("i",{staticClass:"iconfont icon-pinglun",on:{click:function(e){return t.floorComment(s.commentId,s.user.nickname)}}})])])])])])}))],2)},c=[function(){var t=this,e=t._self._c;return e("div",[e("i",{staticClass:"iconfont icon-zhuanfa"})])}],l={name:"myComment",props:{comments:{type:Array,default(){return[]}},commentType:{type:String,default(){return""}},commentId:{type:String,default(){return""}},musicTitle:{type:String,default(){return""}},isHotComment:{type:Boolean,default(){return!0}}},data(){return{commentInput:"",isCommentDialogShow:!1,commentMode:!0,floorCommentInputLength:0,floorCommentId:""}},methods:{async submitComment(){if(!this.$store.state.isLogin)return void this.$message.warning("只有登陆后才能评论哦!");if(""==this.commentInput)return void this.$message.warning("评论内容不能为空哦!");let t;switch(this.commentType){case"album":t=3;break;case"musicList":t=2;break;case"music":t=0;break;case"mv":t=1;break;case"video":t=5;break}let e=await this.$request("/comment",{t:1,id:this.commentId,type:t,content:this.commentInput}).catch((t=>{this.$message.error(t.response.data.msg)}));e&&(200==e.data.code?("music"==this.commentType&&(this.isCommentDialogShow=!1),this.commentInput="",this.$emit("getComment")):this.$message.error("评论失败,请稍后重试!"))},closeCommentDialog(){this.isCommentDialogShow=!1,this.commentInput="",this.floorCommentId="",this.commentMode=!0,this.floorCommentInputLength=0},async likeCurrentComment(t,e){if(console.log(t,e),!this.$store.state.isLogin)return void this.$message.warning("只有登陆后才能点赞哦!");var s=Date.parse(new Date);let i;switch(this.commentType){case"album":i=3;break;case"musicList":i=2;break;case"music":i=0;break;case"mv":i=1;break;case"video":i=5;break}let o=await this.$request("/comment/like",{id:this.commentId,cid:e,t:t?0:1,type:i,timestamp:s});console.log(o),200==o.data.code?this.$emit("getComment"):this.$message.error("点赞失败,请稍后重试!")},floorComment(t,e){if(console.log(t,e),0==this.isHotComment&&this.$emit("transToHotComment",{commentId:t,nickName:e}),"music"!=this.commentType){this.$emit("scrollToComment");let t=document.querySelector(".commentArea");t.children[0].focus({preventScroll:!0})}else this.openDialog();this.commentInput="回复"+e+"：",this.floorCommentInputLength=this.commentInput.length,this.commentMode=!1,this.floorCommentId=t},async submitFloorComment(){if(console.log("提交楼层评论"),!this.$store.state.isLogin)return void this.$message.warning("只有登陆后才能评论哦!");if(this.commentInput.length==this.floorCommentInputLength)return void this.$message.error("评论内容不能为空哦!");let t;switch(this.commentType){case"album":t=3;break;case"musicList":t=2;break;case"music":t=0;break;case"mv":t=1;break;case"video":t=5;break}let e=await this.$request("/comment",{t:2,id:this.commentId,type:t,content:this.commentInput,commentId:this.floorCommentId}).catch((t=>{this.$message.error(t.response.data.msg)}));e&&(200==e.data.code?("music"==this.commentType&&(this.isCommentDialogShow=!1),this.commentInput="",this.commentMode=!0,this.floorCommentInputLength=0,this.floorCommentId="",this.isCommentDialogShow=!1,this.$emit("getComment")):this.$message.error("评论失败,请稍后重试!"))},inputComment(){0==this.commentMode&&this.commentInput.length<this.floorCommentInputLength&&(this.commentMode=!0,console.log("修改mode"))},openDialog(){this.isCommentDialogShow=!this.isCommentDialogShow,this.$nextTick((()=>{let t=document.querySelector(".musicCommentArea");t.children[0].focus()}))},goToPersonal(t){this.$router.push({name:"personal",params:{uid:t}}),"music"==this.commentType&&this.$store.commit("changeMusicDetailCardState",!1)}},filters:{showDate(t){const e=new Date(t);return(0,m.p6)(e,"yyyy-MM-dd")}},watch:{comments(){this.commentInpt="",this.isCommentDialogShow=!1,this.commentMode=!0,this.floorCommentInputLength=0,this.floorCommentId=""}},created(){}},r=l,u=s(1001),d=(0,u.Z)(r,a,c,!1,null,"78a84d44",null),h=d.exports,C={data(){return{musicListDetail:{creator:{},tags:{}},comments:{},isCreated:!1,currentCommentPage:1,scrollLoadDisabled:!1,isCommentLoading:!1,isMore:!1}},components:{Comment:h},methods:{async getMusicListDetail(){var t=await(0,n.Xk)(this.$route.params.id);this.musicListDetail=t.data.playlist,console.log(t),this.musicListDetail.tracks.forEach(((t,e)=>{this.musicListDetail.tracks[e].dt=(0,m.oF)(t.dt)}))},async getMusicListComments(){var t=await(0,n.D9)(this.$route.params.id,this.currentCommentPage);this.comments=t.data,console.log(this.comments)},clickTab(){},clickBarItem(t){this.$router.push(t)},async clickRow(t){console.log(t),this.$store.commit("updataMusicId",t.id),this.musicListDetail.id!=this.$store.state.musicListId&&this.$store.commit("updataMusicList",{musicList:this.musicListDetail.tracks,musicListId:this.musicListDetail.id})},playAll(){},collectList(){},scrollToComment(){},clickCell(){},commentPageChange(){},handleIndex(t){return t+=1,t<10?"0"+t:t}},mounted(){this.getMusicListDetail(),this.getMusicListComments()},filters:{handleNum:m.xw,showDate(t){const e=new Date(t);return(0,m.p6)(e,"yyyy-MM-dd")}}},p=C,g=(0,u.Z)(p,i,o,!1,null,"360cecce",null),v=g.exports}}]);
//# sourceMappingURL=610.74f5dfdf.js.map