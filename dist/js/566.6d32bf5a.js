"use strict";(self["webpackChunkvue_cloud"]=self["webpackChunkvue_cloud"]||[]).push([[566],{6566:function(t,s,a){a.r(s),a.d(s,{default:function(){return u}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"SearchSong"},[s("div",{staticClass:"tip"},[t._v("找到"+t._s(t.songCount)+"首单曲")]),t.multiMatch.artist?s("div",{staticClass:"multiMatch"},[s("div",{staticClass:"matchTitle"},[t._v("最佳匹配")]),s("div",{staticClass:"matchContent"},t._l(t.multiMatch.artist,(function(a,i){return s("div",{key:i,staticClass:"matchResult"},[s("div",{staticClass:"matchCover"},[s("img",{attrs:{src:a.img1v1Url+"?param==100y100",alt:""}})]),s("div",{staticClass:"matchName"},[t._v("歌手："+t._s(a.name))]),s("i",{staticClass:"iconfont icon-arrow-right-bold"})])})),0)]):t._e(),s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.searchSongList,size:"medium","highlight-current-row":"",stripe:""},on:{"row-dblclick":t.clickRow,"cell-click":t.clickCell}},[s("el-table-column",{attrs:{label:"",width:"30",type:"index"}}),s("el-table-column",{attrs:{label:"",width:"23"}},[s("i",{staticClass:"iconfont icon-download"})]),s("el-table-column",{attrs:{prop:"name",label:"音乐标题","min-width":"200"}}),s("el-table-column",{attrs:{prop:"ar[0].name",label:"歌手","min-width":"100"}}),s("el-table-column",{attrs:{prop:"al.name",label:"专辑","min-width":"170"}}),s("el-table-column",{attrs:{prop:"dt",label:"时长","min-width":"60"}})],1)],1)},e=[],c=a(3214),l=a(6037),o={data(){return{multiMatch:{},searchSongList:[],songCount:0}},created(){this.getMultimatch(),this.getSearch()},methods:{async getMultimatch(){const t=await(0,l.G7)(this.$route.params.keyword);this.multiMatch=t.data.result},async getSearch(){const t=await(0,l.on)(this.$route.params.keyword);this.searchSongList=t.data.result.songs,this.songCount=t.data.result.songCount,this.searchSongList.forEach(((t,s)=>{this.searchSongList[s].dt=(0,c.oF)(t.dt)})),console.log(this.searchSongList)},handleIndex(t){return console.log(t),t=t+1+30*(this.currentPage-1),t<10?"0"+t:t},clickCell(){},async clickRow(t){let s=this.$store.state.musicList,a=this.$store.state.currentIndex,i=s.find((s=>s.id==t.id));i?this.$store.commit("updataMusicId",t.id):(this.$store.commit("updataPlayState",!1),s.splice(a+1,0,t),this.$store.commit("updataMusicId",t.id),this.$store.commit("updataMusicList",{musicList:s,musicListId:this.$store.state.musicListId}))}},watch:{$route(){this.getMultimatch(),this.getSearch()}}},r=o,n=a(1001),h=(0,n.Z)(r,i,e,!1,null,"61ca8ade",null),u=h.exports}}]);
//# sourceMappingURL=566.6d32bf5a.js.map