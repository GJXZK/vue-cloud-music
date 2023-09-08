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
const SingerDetail = () => import("@/views/singerdetail/SingerDetail");
const MVDetail = () => import("@/views/MVdetail/MVDetail");
// const VideoDetail = () => import("@/views/videodetail/videoDetail");

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
        path: "/search",
        name: "mysearch",
        component: Search,
        redirect: "/search/searchsong/:keyword",
        children: [
          {
            path: "/search/searchvideo/:keyword",
            name: "mysearch-video",
            component: SearchVideo,
          },
          {
            path: "/search/searchalbum/:keyword",
            name:"mysearch-album",
            component: SearchAlbum,
          },
          {
            path: "/search/searchsong/:keyword",
            name:"mysearch-song",
            component: SearchSong,
          },
          {
            path: "/search/searchmusiclist/:keyword",
            name:"mysearch-musiclist",
            component: SearchMusicList,
          },
          {
            path: "/search/searchsinger/:keyword",
            name:"mysearch-singer",
            component: SearchSinger,
          },
        ],
      },
      {
        path:'/musiclistdetail/:id',
        name:'musiclistdetail',
        component: MusicListDetail,
      },
      {
        path:'/singerdetail/:id',
        name:'singerdetail',
        component:SingerDetail
      },
      {
        path:'/MVDetail/:id',
        name:'MVDetail',
        component:MVDetail
      },
      // {
      //   path:'/videoDetail/:id',
      //   name:'videoDetail',
      //   component:VideoDetail
      // },
    ],
  },
];

const router = new VueRouter({
  routes,
  // mode: "history",
  // base:'/cloudmusic/'
});

export default router;
