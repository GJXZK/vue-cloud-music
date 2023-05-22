(function(){"use strict";var e={2645:function(e,t,n){var r=n(6369),u=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],i={},a=i,c=n(1001),s=(0,c.Z)(a,u,o,!1,null,null,null),d=s.exports,l=n(8499);r["default"].use(l.Container),r["default"].use(l.Header),r["default"].use(l.Aside),r["default"].use(l.Main),r["default"].use(l.Switch),r["default"].use(l.Menu),r["default"].use(l.MenuItem),r["default"].use(l.MenuItemGroup),r["default"].use(l.Submenu),r["default"].use(l.Carousel),r["default"].use(l.CarouselItem),r["default"].use(l.Pagination),r["default"].use(l.Tabs),r["default"].use(l.TabPane),r["default"].use(l.Table),r["default"].use(l.TableColumn),r["default"].use(l.Slider),r["default"].use(l.Input),r["default"].use(l.Popover),r["default"].use(l.Button),r["default"].use(l.Form),r["default"].use(l.FormItem),r["default"].use(l.Drawer),r["default"].use(l.InfiniteScroll),r["default"].use(l.Dialog),r["default"].use(l.Link),r["default"].use(l.Tooltip),r["default"].use(l.Loading),r["default"].prototype.$message=l.Message;var f=n(2631);const p=()=>Promise.all([n.e(736),n.e(263)]).then(n.bind(n,4263)),m=()=>n.e(947).then(n.bind(n,5947)),h=()=>Promise.all([n.e(736),n.e(686)]).then(n.bind(n,1686)),v=()=>n.e(815).then(n.bind(n,4815)),b=()=>n.e(757).then(n.bind(n,8757)),g=()=>n.e(78).then(n.bind(n,5078)),y=()=>n.e(140).then(n.bind(n,140)),w=()=>n.e(925).then(n.bind(n,5925)),S=()=>n.e(588).then(n.bind(n,6588)),k=()=>Promise.all([n.e(736),n.e(566)]).then(n.bind(n,6566)),C=()=>n.e(362).then(n.bind(n,6362)),I=()=>n.e(826).then(n.bind(n,4826)),L=()=>n.e(941).then(n.bind(n,4941)),P=()=>n.e(146).then(n.bind(n,5146)),T=()=>Promise.all([n.e(736),n.e(610)]).then(n.bind(n,8610));r["default"].use(f.ZP);const M=[{path:"/",redirect:"/index"},{path:"/index",component:p,redirect:"/discover",children:[{path:"/discover",component:m,redirect:"/discover/recommend",children:[{path:"/discover/recommend",component:h},{path:"/discover/musiclist",component:v},{path:"/discover/ranking",component:b},{path:"/discover/singer",component:g}]},{path:"/video",component:y},{path:"/recommendmusic",component:w},{path:"/search/:keyword",name:"mysearch",component:S,redirect:"/search/searchsong/:keyword",children:[{path:"/search/searchvideo/:keyword",component:L},{path:"/search/searchalbum/:keyword",component:I},{path:"/search/searchsong/:keyword",component:k},{path:"/search/searchmusiclist/:keyword",component:C},{path:"/search/searchsinger/:keyword",component:P}]},{path:"/musiclistdetail/:id",name:"musiclistdetail",component:T}]}],O=new f.ZP({routes:M});var x=O,j=n(4239),E=(n(1152),n(4603)),_=(n(4536),n(8353));r["default"].use(_.Z),r["default"].use(E.Z),r["default"].config.productionTip=!1,new r["default"]({router:x,store:j.Z,render:e=>e(d)}).$mount("#app")},4239:function(e,t,n){var r=n(6369),u=n(3822);r["default"].use(u.ZP);const o={isLogin:!1,musicInfo:{},musicUrl:"",musicId:"",playState:!1,currentTime:0,musicList:[],musicListId:"",currentIndex:-1,searchKeyword:"",isMusicDetailCardShow:!0},i=new u.ZP.Store({state:o,mutations:{updataLoginState(e,t=!1){e.isLogin=t},updataMusicId(e,t){e.musicId=t,console.log(e.musicId)},updataMusicUrl(e,t){e.musicUrl=t,console.log(e.musicUrl)},updataPlayState(e,t){e.playState=t,console.log(e.playState)},updateCurrentTime(e,t){e.currentTime=t},updataMusicList(e,t){t.musicListId!=e.musicListId&&(e.musicListId=t.musicListId,e.currentIndex=-1);let n=t.musicList.slice(0);e.musicList=n},updateCurrentIndex(e,t){e.currentIndex=t},updataSearchKeyword(e,t){e.searchKeyword=t},changeMusicDetailCardState(e){e.isMusicDetailCardShow=!e.isMusicDetailCardShow}}});t["Z"]=i}},t={};function n(r){var u=t[r];if(void 0!==u)return u.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,u,o){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],u=e[d][1],o=e[d][2];for(var a=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,o<i&&(i=o));if(a){e.splice(d--,1);var s=u();void 0!==s&&(t=s)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,u,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{78:"d4f00a7e",140:"f9ec41de",146:"9cdfc65d",263:"acdeab4a",362:"73c1a518",566:"6d32bf5a",588:"eb4f4556",610:"74f5dfdf",686:"46911367",736:"66572a4d",757:"82397237",815:"3d1819b2",826:"0d9e35a1",925:"e19d4615",941:"26e5137d",947:"f3373386"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{263:"fc43957e",566:"eef69ac9",588:"30031980",610:"7924fd06",686:"838e16f6",947:"f23acb39"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-cloud:";n.l=function(r,u,o,i){if(e[r])e[r].push(u);else{var a,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var l=s[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+o),a.src=r),e[r]=[u];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var u=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),u&&u.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/cloudmusic/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,u){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=a,o.parentNode&&o.parentNode.removeChild(o),u(c)}};return o.onerror=o.onload=i,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var u=n[r],o=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(o===e||o===t))return u}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){u=i[r],o=u.getAttribute("data-href");if(o===e||o===t)return u}},r=function(r){return new Promise((function(u,o){var i=n.miniCssF(r),a=n.p+i;if(t(i,a))return u();e(r,a,null,u,o)}))},u={143:0};n.f.miniCss=function(e,t){var n={263:1,566:1,588:1,610:1,686:1,947:1};u[e]?t.push(u[e]):0!==u[e]&&n[e]&&t.push(u[e]=r(e).then((function(){u[e]=0}),(function(t){throw delete u[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var u=n.o(e,t)?e[t]:void 0;if(0!==u)if(u)r.push(u[2]);else{var o=new Promise((function(n,r){u=e[t]=[n,r]}));r.push(u[2]=o);var i=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(u=e[t],0!==u&&(e[t]=void 0),u)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,u[1](a)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var u,o,i=r[0],a=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(u in a)n.o(a,u)&&(n.m[u]=a[u]);if(c)var d=c(n)}for(t&&t(r);s<i.length;s++)o=i[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self["webpackChunkvue_cloud"]=self["webpackChunkvue_cloud"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2645)}));r=n.O(r)})();
//# sourceMappingURL=app.050eb583.js.map