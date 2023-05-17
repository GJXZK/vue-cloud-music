import Vue from "vue";
import VueRouter from "vue-router";
// 编写路由 导入Index
const Index = () => import("@/components/Index");
const Discover = () => import("@/views/discover/Discover");
const Recommend = () => import("@/views/discover/discoverChildren/Recommend");
const MusicList = () => import("@/views/discover/discoverChildren/Musiclist");
const Ranking = () => import("@/views/discover/discoverChildren/Ranking");
const Singer = () => import("@/views/discover/discoverChildren/Singer");
const Video = () => import("@/views/video/Video");
const Recommendmusic = () => import("@/views/recommendmusic/Recommendmusic");
const Search = () => import("@/views/search/Search");
const SearchSong = () => import("@/views/search/SearchChildren/SearchSong");
const SearchMusicList = () =>
  import("@/views/search/SearchChildren/SearchMusicList");
const SearchAlbum = () => import("@/views/search/SearchChildren/SearchAlbum");
const SearchVideo = () => import("@/views/search/SearchChildren/SearchVideo");
const SearchSinger = () => import("@/views/search/SearchChildren/SearchSinger");
const MusicListDetail = () => import("@/views/musiclist/MusicListDetail");
Vue.use(VueRouter);
// 默认路径打开Index
const routes = [
  { path: "/", redirect: "/index" },
  {
    path: "/index",
    component: Index,
    redirect: "/discover",
    children: [
      {
        path: "/discover",
        component: Discover,
        redirect: "/discover/recommend",
        children: [
          {
            path: "/discover/recommend",
            component: Recommend,
          },
          {
            path: "/discover/musiclist",
            component: MusicList,
          },
          {
            path: "/discover/ranking",
            component: Ranking,
          },
          {
            path: "/discover/singer",
            component: Singer,
          },
        ],
      },
      {
        path: "/video",
        component: Video,
      },
      {
        path: "/recommendmusic",
        component: Recommendmusic,
      },
      {
        path: "/search/:keyword",
        name: "mysearch",
        component: Search,
        redirect: "/search/searchsong/:keyword",
        children: [
          {
            path: "/search/searchvideo/:keyword",
            component: SearchVideo,
          },
          {
            path: "/search/searchalbum/:keyword",
            component: SearchAlbum,
          },
          {
            path: "/search/searchsong/:keyword",
            component: SearchSong,
          },
          {
            path: "/search/searchmusiclist/:keyword",
            component: SearchMusicList,
          },
          {
            path: "/search/searchsinger/:keyword",
            component: SearchSinger,
          },
        ],
      },
      {
        path:'/musiclistdetail/:id',
        name:'musiclistdetail',
        component: MusicListDetail,
        // children: [
          
        // ]
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
