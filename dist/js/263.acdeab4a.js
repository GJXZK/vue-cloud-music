"use strict";(self["webpackChunkvue_cloud"]=self["webpackChunkvue_cloud"]||[]).push([[263],{4263:function(t,e,s){s.r(e),s.d(e,{default:function(){return ft}});var i=function(){var t=this,e=t._self._c;return e("el-container",[e("el-header",[e("HeaderBar")],1),e("el-container",[e("el-aside",{attrs:{width:"160px"}},[e("el-menu",{attrs:{"active-text-color":"black",router:""}},[e("el-menu-item",{attrs:{index:"/discover"}},[e("i",{staticClass:"iconfont icon-yinle"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("发现音乐")])]),e("el-menu-item",{attrs:{index:"/video"}},[e("i",{staticClass:"iconfont icon-shipin"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("视频")])]),e("el-menu-item",{attrs:{index:"/"}},[e("i",{staticClass:"iconfont icon-more"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("收藏")])]),e("el-menu-item",{attrs:{index:"/recommendmusic"}},[e("i",{staticClass:"iconfont icon-good"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("每日推荐")])])],1)],1),e("el-main",[e("router-view")],1)],1),e("BottomControl"),e("MusicDetailCard")],1)},a=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bottomControl"},[e("audio",{ref:"audioPlayer",attrs:{src:t.musicUrl,autoplay:""},on:{play:function(e){return t.changeState(!0)},pause:function(e){return t.changeState(!1)},ended:function(e){return t.changeMusic("next")},timeupdate:t.tiemupdate}}),e("div",{staticClass:"left"},[e("div",{staticClass:"musicpic",on:{click:t.openMusicDetailCard}},[t.musicDetail.al?e("img",{attrs:{src:t.musicDetail.al.picUrl,alt:""}}):e("img",{attrs:{src:s(7641),alt:""}})]),e("div",{staticClass:"musicInfo"},[t.musicDetail&&t.musicDetail.name?e("div",{staticClass:"musicName"},[t._v(t._s(t.musicDetail.name))]):t._e(),t.musicDetail&&t.musicDetail.ar?e("div",{staticClass:"singer"},[t._v(t._s(t.musicDetail.ar[0].name))]):t._e()])]),e("div",{staticClass:"center"},[e("div",{staticClass:"controls"},[e("span",{on:{click:function(e){t.playType="order"==t.playType?"random":"order"}}},[e("i",{directives:[{name:"show",rawName:"v-show",value:"order"==t.playType,expression:"playType == 'order'"}],staticClass:"iconfont icon-xunhuan"}),e("i",{directives:[{name:"show",rawName:"v-show",value:"random"==t.playType,expression:"playType == 'random'"}],staticClass:"iconfont icon-suiji"})]),e("span",{on:{click:function(e){0!=t.musicList.length&&t.changeMusic("pre")}}},[e("i",{staticClass:"iconfont icon-shangyishou"})]),e("span",{on:{click:function(e){0!=t.musicList.length&&t.changePlayState()}}},[this.$store.state.playState?e("i",{staticClass:"iconfont icon-zantingtingzhi"}):e("i",{staticClass:"iconfont icon-icon_play"})]),e("span",{on:{click:function(e){0!=t.musicList.length&&t.changeMusic("next")}}},[e("i",{staticClass:"iconfont icon-xiayishou"})]),t._m(0)]),e("div",{staticClass:"progressBar"},[e("span",{staticClass:"currentTime"},[t._v(t._s(t._f("handleMusicTime")(t.currentTime)))]),e("el-slider",{staticClass:"progressSlider",attrs:{"show-tooltip":!1,disabled:0==t.musicList.length},on:{change:t.dragSlider},model:{value:t.timeProgress,callback:function(e){t.timeProgress=e},expression:"timeProgress"}}),e("span",{staticClass:"totalTime"},[t._v(t._s(t.duration))])],1)]),e("div",{staticClass:"right"},[e("div",{staticClass:"volumeControl"},[e("i",{staticClass:"iconfont icon-yinliang"}),e("el-slider",{staticClass:"volumeSlider",attrs:{"show-tooltip":!1},on:{input:t.changeVolume},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}})],1),e("div",{staticClass:"playList",on:{click:t.openDrawer}},[e("i",{staticClass:"iconfont icon-bofangliebiao"})]),e("el-drawer",{attrs:{visible:t.drawer,"with-header":!1,size:"100"},on:{"update:visible":function(e){t.drawer=e}}},[e("div",{staticClass:"drawerHeader"},[t._v("总"+t._s(t.musicList.length)+"首")]),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.musicList,stripe:"","show-header":!1,"highlight-current-row":"",lazy:""},on:{"row-dblclick":t.clickRow}},[e("el-table-column",{attrs:{prop:"name",width:"150px"}}),e("el-table-column",{attrs:{prop:"ar[0].name",width:"80px"}}),e("el-table-column",{attrs:{prop:"dt",width:"70px"}})],1)],1)],1)])},n=[function(){var t=this,e=t._self._c;return e("span",[e("i",{staticClass:"iconfont icon-xihuan"})])}],r=s(6037),c=s(3214);let l=0,u=0,d=0;var h={data(){return{musicDetail:{},volume:30,isMuted:!1,drawer:!1,musicUrl:"",playType:"order",musicList:[],duration:"00:00",currentTime:0,timeProgress:0,showPopup:!1,currentMusicIndex:0}},computed:{defaultImg(){return"../../assets/img/test.jpg"}},methods:{getMusicDetailFromMusicList(){let t=this.musicList.findIndex((t=>t.id==this.$store.state.musicId));console.log(t),-1!=t&&(this.currentMusicIndex=t,this.$store.commit("updateCurrentIndex",t),this.musicDetail=this.musicList[t],this.duration=this.musicList[t].dt)},openDrawer(){this.showPopup=!this.showPopup,this.drawer=!this.drawer,this.hasDrawerOpend=!0},async getMusicUrl(t){const e=await(0,r.WL)(t);this.musicUrl=e.data.data[0].url},async getMusicDetail(t){const e=await(0,r.XL)(t);this.musicDetail=e.data.songs[0],this.duration=(0,c.oF)(e.data.songs[0].dt),u=(0,c.J4)(this.duration)},playMusic(){this.$refs.audioPlayer.play()},pauseMusic(){this.$refs.audioPlayer.pause()},changeState(t){this.$store.commit("updataPlayState",t)},changePlayState(){this.$store.state.playState?this.pauseMusic():this.playMusic()},tiemupdate(){let t=this.$refs.audioPlayer.currentTime;this.$store.commit("updateCurrentTime",t),t=Math.floor(t),t!==l&&(l=t,this.currentTime=t,this.timeProgress=Math.floor(t/u*100))},dragSlider(t){this.currentTime=Math.floor(t/100*u),this.$refs.audioPlayer.currentTime=this.currentTime},clickRow(t){console.log(t),this.changeMusic("click",t.id)},updateMusicList(t){this.musicList=t},changeMusic(t,e){if("click"==t)this.$store.commit("updataMusicId",e);else if("pre"==t){console.log("上一曲");let t,e=this.currentMusicIndex;if("order"==this.playType)t=e-1<0?this.musicList.length-1:e-1;else if("random"==this.playType)if(1==this.musicList.length)t=e;else{t=e;while(t==e)t=Math.floor(Math.random()*this.musicList.length)}console.log(this.musicList[t].id),this.$store.commit("updataMusicId",this.musicList[t].id)}else if("next"==t){console.log("下一曲");let t,e=this.currentMusicIndex;if("order"==this.playType)t=e+1==this.musicList.length?0:e+1;else if("random"==this.playType)if(1==this.musicList.length)t=e;else{t=e;while(t==e)t=Math.floor(Math.random()*this.musicList.length)}console.log(this.musicList[t].id),this.$store.commit("updataMusicId",this.musicList[t].id)}},changeVolume(t){this.$refs.audioPlayer.volume=t/100,this.isMuted&&t>0?this.isMuted=!1:0==t&&0==this.isMuted&&(this.isMuted=!0)},changeMutedState(){this.isMuted?this.volume=d:(d=this.volume,this.volume=0),console.log(d,this.isMuted),this.isMuted=!this.isMuted},openMusicDetailCard(){this.$store.commit("changeMusicDetailCardState")}},watch:{"$store.state.musicId"(t){console.log("vuex中的Id发生了变化"),this.pauseMusic(),this.updateMusicList(this.$store.state.musicList),this.getMusicUrl(t),this.getMusicDetailFromMusicList(),this.getMusicDetail(t),this.playMusic()}},filters:{handleMusicTime:c.oF}},m=h,g=s(1001),p=(0,g.Z)(m,o,n,!1,null,"1f61ba3c",null),f=p.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"headerBar"},[t._m(0),e("div",{staticClass:"center"},[e("div",{staticClass:"buttons"},[e("i",{staticClass:"iconfont icon-arrow-left-bold back",on:{click:function(e){return t.$router.go(-1)}}}),e("i",{staticClass:"iconfont icon-arrow-right-bold forward",on:{click:function(e){return t.$router.go(1)}}})]),e("div",{staticClass:"search"},[e("van-search",{attrs:{placeholder:"请输入搜索关键词",background:"#ec4141",shape:"round"},on:{focus:t.SearchFocus,search:t.onSubmit},model:{value:t.searchKeyWord,callback:function(e){t.searchKeyWord=e},expression:"searchKeyWord"}}),t.searchSuggestList?t._e():e("div",{staticClass:"hotSearch"},[e("div",{staticClass:"hotSearchTitle"},[t._v("热搜榜")])])],1)]),e("div",{staticClass:"right"},[e("div",{staticClass:"user"},[e("div",{staticClass:"avatar"},[t.userInfo.avatarUrl?e("img",{attrs:{slot:"reference",src:t.userInfo.avatarUrl,alt:""},slot:"reference"}):e("el-popover",{attrs:{placement:"bottom",width:"300",trigger:"click"},model:{value:t.isPopoverShow,callback:function(e){t.isPopoverShow=e},expression:"isPopoverShow"}},[t.isPopoverShow?e("login",{attrs:{isRegisteredShow:t.isRegisteredShow},on:{"update:isRegisteredShow":function(e){t.isRegisteredShow=e},"update:is-registered-show":function(e){t.isRegisteredShow=e},getUserInfo:e=>{t.userInfo=e,t.isPopoverShow=!1}}}):t._e(),e("img",{attrs:{slot:"reference",src:s(7641),alt:""},slot:"reference"})],1)],1),t.userInfo.nickname?e("div",{staticClass:"userName"},[t._v(t._s(t.userInfo.nickname))]):e("div",{staticClass:"userName"},[t._v("点击头像登录")])])]),e("Registered",{attrs:{isDialogShow:t.isRegisteredShow},on:{closeRegistered:t.closeRegistered}})],1)},w=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"left"},[e("img",{attrs:{src:s(5080),alt:""}})])}],v=(s(7658),function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{visible:t.isDialogShow,"custom-class":"registeredDialog",width:"400px","append-to-body":""},on:{close:t.closeRegistered}},[e("div",{staticClass:"registeredContainer"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:s(6970),alt:""}})]),0==t.currentStep?e("el-form",{staticClass:"form",attrs:{model:t.userInfo}},[e("el-form-item",[e("el-input",{staticClass:"mobile",attrs:{"prefix-icon":"el-icon-mobile-phone",size:"small",placeholder:"请输入手机号"},model:{value:t.userInfo.mobile,callback:function(e){t.$set(t.userInfo,"mobile",e)},expression:"userInfo.mobile"}})],1),e("el-form-item",[e("el-input",{staticClass:"password",attrs:{"prefix-icon":"el-icon-lock",size:"small",placeholder:"设置登录密码",type:"password"},model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}}),e("div",{staticClass:"tip"},[t._v(" 密码8~20位，至少包含字母/数组/字符2中组合 ")])],1),e("el-form-item",[e("el-button",{attrs:{size:"small",loading:t.isButtonLoading},on:{click:t.submitCount}},[t._v("注册")])],1)],1):1==t.currentStep?e("el-form",{staticClass:"form"},[e("el-form-item",{staticClass:"codeInput"},[e("el-input",{staticClass:"mobile",attrs:{"prefix-icon":"el-icon-key",size:"small",placeholder:"请填写验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),e("div",{staticClass:"codeButtonContainer"},[t.isCountDownShow?e("div",{staticClass:"countDown"},[t._v(t._s(t.countDown)),e("span",[t._v("s")])]):e("div",{staticClass:"codeButton",on:{click:t.getCode}},[t._v(" 获取验证码 ")])])],1),e("el-form-item",[e("el-button",{attrs:{size:"small",loading:t.isButtonLoading},on:{click:t.submitCode}},[t._v("下一步")])],1)],1):2==t.currentStep?e("el-form",{staticClass:"form"},[e("el-form-item",[e("el-input",{staticClass:"mobile",attrs:{"prefix-icon":"el-icon-user",size:"small",placeholder:"请填写昵称"},model:{value:t.userInfo.nickname,callback:function(e){t.$set(t.userInfo,"nickname",e)},expression:"userInfo.nickname"}})],1),e("el-form-item",[e("el-button",{attrs:{size:"small",loading:t.isButtonLoading},on:{click:t.finishRegistered}},[t._v("完成注册")])],1)],1):t._e()],1)])}),A=[];let y;var I={name:"myRegistered",props:{isDialogShow:{type:Boolean,default(){return!1}}},data(){return{currentStep:0,userInfo:{mobile:"",password:"",nickname:""},code:"",isButtonLoading:!1,countDown:60,isCountDownShow:!1}},methods:{async getCode(){let t=await this.$request("/captcha/sent",{phone:this.userInfo.mobile});console.log(t),200==t.data.code?(this.countDown=60,this.isCountDownShow=!0,y=setInterval((()=>{if(0==this.countDown)return clearInterval(y),void(this.isCountDownShow=!1);this.countDown--}),1e3)):this.$message.error(t.data.message)},async submitCount(){if(console.log("注册"),this.isButtonLoading=!0,this.userInfo.password.length<8||11!=this.userInfo.mobile.length)return this.$message.warning("手机号码或者密码格式错误!"),void(this.isButtonLoading=!1);let t=await this.$request("/cellphone/existence/check",{phone:this.userInfo.mobile});console.log(t),1!==t.data.exist?(await this.getCode(),this.isButtonLoading=!1,this.currentStep=1):(this.isButtonLoading=!1,this.$message.warning("此手机号已经注册过了哦,请直接登录!"),this.$emit("closeRegistered"))},async submitCode(){if(console.log("验证验证码"),this.isButtonLoading=!0,4!=this.code.length)return this.isButtonLoading=!1,void this.$message.warning("验证码格式错误!");let t=await this.$request("/captcha/verify",{phone:this.userInfo.mobile,captcha:this.code}).catch((t=>{this.$message.error(t.response.data.message),this.isButtonLoading=!1}));t&&(this.isButtonLoading=!1,console.log(t),t.data.data&&(this.currentStep=2))},async finishRegistered(){this.isButtonLoading=!0;let t=await this.$request("/register/cellphone",{captcha:this.code,phone:this.userInfo.mobile,password:this.userInfo.password,nickname:this.userInfo.nickname}).catch((t=>{this.$message.error(t.response.data.message),this.isButtonLoading=!1}));t&&(this.isButtonLoading=!1,console.log(t),200==t.data.code?(this.$message.success("注册成功!"),this.$emit("closeRegistered")):this.$message.error("注册失败!"))},closeRegistered(){this.userInfo={mobile:"",password:"",nickname:""},this.currentStep=0,this.code="",this.isButtonLoading=!1,this.isCountDownShow=!1,this.countDown=60,this.$emit("closeRegistered")}}},S=I,b=(0,g.Z)(S,v,A,!1,null,"5218cf5e",null),k=b.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Login"},[e("el-tabs",{attrs:{stretch:""}},[e("el-tab-pane",{attrs:{label:"二维码登录",lazy:""}},[e("qr-code-login",{on:{getUserInfo:t.getUserInfo}}),e("div",{staticClass:"tips"},[t._v("提示: 请使用网易云音乐app扫码登陆")])],1),e("el-tab-pane",{attrs:{label:"验证码登录",lazy:""}},[e("verify-code-login"),e("div",{staticClass:"tips",staticStyle:{"margin-top":"10px"}},[t._v("提示: 若登录失败, 请使用二维码登录")])],1)],1),e("div",{staticClass:"regEnter",on:{click:function(e){return t.$emit("update:isRegisteredShow",!0)}}},[t._v("注册")])],1)},B=[],R=function(){var t=this,e=t._self._c;return e("el-form",{ref:"form",attrs:{model:t.loginForm,"label-width":"70px","label-position":"right",rules:t.rules,size:"mini"}},[e("el-form-item",{attrs:{label:"手机号:",prop:"phone"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.phone,expression:"loginForm.phone"}],staticClass:"loginInput",attrs:{type:"text"},domProps:{value:t.loginForm.phone},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"phone",e.target.value)}}})]),e("el-form-item",{staticClass:"captcha",attrs:{label:"验证码:",prop:"captcha"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.captcha,expression:"loginForm.captcha"}],staticClass:"loginInput",attrs:{type:"text"},domProps:{value:t.loginForm.captcha},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"captcha",e.target.value)}}}),e("timer-button",{staticClass:"btn-primary",attrs:{callback:t.getVerifyCode}})],1),e("div",{staticClass:"loginButton"},[e("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.login}},[t._v("登录")])],1)],1)},M=[],E=function(){var t=this,e=t._self._c;return e("el-button",{attrs:{disabled:0!==t.countdown},on:{click:t.clickFn}},[t._v(t._s(t.btnMsg))])},x=[],L={name:"timerButton",props:{btnOpt:{type:Object,default(){return{}}},callback:{type:Function,default:null}},data(){return{countdown:0,defaultBtnOpt:{timingMsg:"重新获取",clickMsg:"获取验证码",countdown:60,...this.btnOpt}}},methods:{async clickFn(){const t=this.callback&&await this.callback();if(!t)return;this.countdown=1*this.defaultBtnOpt.countdown;const e=setInterval((()=>{this.countdown--,0===this.countdown&&clearInterval(e)}),1e3)}},computed:{btnMsg(){return this.countdown?`${this.countdown}s后${this.defaultBtnOpt.timingMsg}`:`点击${this.defaultBtnOpt.clickMsg}`}}},q=L,U=(0,g.Z)(q,E,x,!1,null,null,null),P=U.exports,V=s(7453);function Q(t){return(0,V.W)("/captcha/sent",t)}function H(t){return(0,V.W)("/login/cellphone",t)}function W(){return(0,V.W)("/login/qr/key")}function K(t){return(0,V.W)("/login/qr/create",t)}function J(t){return(0,V.W)("/login/qr/check",t)}function j(){return(0,V.W)("/user/account")}var X={name:"verifyCodeLogin",components:{timerButton:P},data(){return{loginForm:{captcha:"",phone:""},rules:{phone:[{required:!0,message:"请输入手机号",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},methods:{login(){this.$refs["form"].validate((async t=>{if(!t)return;const e=await H(this.loginForm);200==e.data.code&&(window.localStorage.setItem("userId",e.data.profile.userId),this.$emit("getUserInfo",e.data.profile),this.$message.success("登录成功!"),this.$store.commit("updataLoginState",!0))}))},async getVerifyCode(){const t=this.loginForm.phone;if(!t)return this.$refs["form"].validateField("phone"),!1;const e=await Q({phone:t});return 200===e.data.code}}},T=X,z=(0,g.Z)(T,R,M,!1,null,"2c519502",null),F=z.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"img-container"},[e("img",{attrs:{src:t.qrCodeImg}})])},N=[],Z={name:"qrCodeLogin",data(){return{key:"",qrCodeImg:"",timer:null}},created(){this.init()},methods:{async init(){await this.getQrCodeKey(),await this.getQrCode(),await this.checkQrCode()},async getQrCodeKey(){const t=await W({timestamp:(0,c.dg)()});this.key=t.data.data.unikey},async getQrCode(){const t=await K({key:this.key,qrimg:!0,timestamp:(0,c.dg)()});this.qrCodeImg=t.data.data.qrimg},async checkQrCode(){this.timer=setInterval((async()=>{if(!this.timer||this.$store.state.isLogin)return;const t=await J({key:this.key,timestamp:(0,c.dg)()});800===t.data.code?(this.clearChecker(),this.init()):803===t.data.code&&(this.clearChecker(),this.getAccountInfo())}),2e3)},async getAccountInfo(){const t=await j();200==t.data.code&&(console.log(t),window.localStorage.setItem("userId",t.data.profile.userId),this.$emit("getUserInfo",t.data.profile),this.$message.success("登录成功!"),this.$store.commit("updataLoginState",!0))},clearChecker(){clearInterval(this.timer),this.timer=null}},beforeDestroy(){this.clearChecker()}},Y=Z,G=(0,g.Z)(Y,O,N,!1,null,"3254313f",null),_=G.exports,$={components:{verifyCodeLogin:F,qrCodeLogin:_},name:"MyLogin",props:{isRegisteredShow:{type:Boolean,default:!1}},data(){return{}},methods:{getUserInfo(t){this.$emit("getUserInfo",t)}}},tt=$,et=(0,g.Z)(tt,D,B,!1,null,"7ee49ff8",null),st=et.exports,it={components:{Registered:k,login:st},name:"HeaderBar",data(){return{userInfo:{},isPopoverShow:!1,isSearchPopShow:!1,hotSearchList:[],searchSuggestList:{},isRegisteredShow:!1,searchKeyWord:""}},methods:{async getCurrentUserInfo(){var t=Date.parse(new Date);let e=await(0,V.W)("/user/account",{timestamp:t});null!=e.data.profile?(this.userInfo=e.data.profile,this.$store.commit("updataLoginState",!0),window.localStorage.setItem("userId",e.data.profile.userId)):(this.$store.commit("updataLoginState",!1),window.localStorage.getItem("userId")&&window.localStorage.removeItem("userId"))},closeRegistered(){this.isRegisteredShow=!1},SearchFocus(){},onSubmit(){""!=this.searchKeyWord&&(this.$store.commit("updataSearchKeyword",this.searchKeyWord),this.goSearch())},goSearch(){this.$router.push({name:"mysearch",params:{keyword:this.searchKeyWord}})}},async created(){this.getCurrentUserInfo(),-1!=document.cookie.search("MUSIC_U=")&&this.$store.commit("updataLoginState",!0)}},at=it,ot=(0,g.Z)(at,C,w,!1,null,"12ac952a",null),nt=ot.exports,rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"musicDetailCard",class:[t.isMusicDetailCardShow?"":"hide"]},[e("div",{staticClass:"closeCard",on:{click:t.colseCard}},[e("i",{staticClass:"iconfont icon-arrow-down-bold"})]),t.musicInfo.name?e("div",{staticClass:"musicDetailContainer"},[e("div",{staticClass:"w"},[e("div",{staticClass:"top"},[e("div",{staticClass:"left"},[e("div",{staticClass:"discContainer"},[t._m(0),e("div",{staticClass:"disc"},[e("img",{attrs:{src:s(5369),alt:""}}),t.musicInfo.al?e("img",{staticClass:"musicAvatar",attrs:{src:t.musicInfo.al.picUrl,alt:""}}):e("img",{attrs:{src:s(7641),alt:""}})])])]),e("div",{staticClass:"right"})]),e("div",{staticClass:"bottom"})])]):e("div",{staticClass:"tip"},[t._v("暂无歌曲信息")])])},ct=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"needle"},[e("img",{attrs:{src:s(6727),alt:""}})])}],lt={data(){return{isMusicDetailCardShow:!0,musicInfo:{name:"AAA"},lyric:[[0,"正在加载歌词"]]}},methods:{colseCard(){this.$store.commit("changeMusicDetailCardState")},async getLyric(t){let e=await(0,r.sO)(t);console.log(e)},async getMusicComment(t){let e=await(0,r.$c)(t);console.log(e)}},watch:{"$store.state.isMusicDetailCardShow"(t){this.isMusicDetailCardShow=t,1==t&&""!=this.$store.state.musicId&&(console.log("获取歌词"),this.getLyric(this.$store.state.musicId),this.getMusicComment(this.$store.state.musicId))},"$store.state.musicId"(t){this.lyric=[[0,"正在加载歌词"]],this.getLyric(t),this.getMusicComment(this.$store.state.musicId),this.musicInfo=this.$store.state.musicList[this.$store.state.currentIndex]}},created(){}},ut=lt,dt=(0,g.Z)(ut,rt,ct,!1,null,"b3833e44",null),ht=dt.exports,mt={name:"MyIndex",components:{BottomControl:f,HeaderBar:nt,MusicDetailCard:ht},data(){return{defaultsActive:""}}},gt=mt,pt=(0,g.Z)(gt,i,a,!1,null,null,null),ft=pt.exports},5369:function(t,e,s){t.exports=s.p+"img/disc.40b25ece.png"},6727:function(t,e,s){t.exports=s.p+"img/needle.1a9dbcbb.png"},5080:function(t,e,s){t.exports=s.p+"img/logo.a11b53a2.png"},6970:function(t,e,s){t.exports=s.p+"img/registered.5e48363d.png"},7641:function(t){t.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=263.acdeab4a.js.map