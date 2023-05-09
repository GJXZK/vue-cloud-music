import Vue from 'vue'
import VueRouter from 'vue-router'
// 编写路由 导入Index 
const Index = () =>import('@/components/Index')
const Discover = () =>import('@/views/discover/Discover') 
const Recommend=()=>import('@/views/discover/discoverChildren/Recommend')
const MusicList = () =>import('@/views/discover/discoverChildren/Musiclist')
const Ranking=()=>import('@/views/discover/discoverChildren/Ranking')
const Singer=()=>import('@/views/discover/discoverChildren/Singer')
const Video = () =>import('@/views/video/Video')
const Recommendmusic = () =>import('@/views/recommendmusic/Recommendmusic')
Vue.use(VueRouter)
// 默认路径打开Index
const routes = [
  {path:'/',redirect:'/index'},
  {
    path:'/index',
    component:Index,
    redirect:'/discover',
    children:[
      {
        path:'/discover',
        component:Discover,
        redirect:'/discover/recommend',
        children:[
          {
            path:'/discover/recommend',
            component:Recommend
          },
          {
            path:'/discover/musiclist',
            component:MusicList
          },
          {
            path:'/discover/ranking',
            component:Ranking
          },
          {
            path:'/discover/singer',
            component:Singer
          }
        ]
      },
      {
        path:'/video',
        component:Video
      },
      {
        path:'/recommendmusic',
        component:Recommendmusic
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
