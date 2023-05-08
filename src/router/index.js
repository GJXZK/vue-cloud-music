import Vue from 'vue'
import VueRouter from 'vue-router'
// 编写路由 导入Index 
const Index = () =>import('@/components/Index')
const Discover = () =>import('@/views/discover/Discover') 
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
        component:Discover
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
