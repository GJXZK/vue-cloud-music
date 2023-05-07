import Vue from 'vue'
import VueRouter from 'vue-router'
// 编写路由 导入Index 
const Index = () =>import('@/components/Index')

Vue.use(VueRouter)
// 默认路径打开Index
const routes = [
  {path:'/',redirect:'/index'},
  {
    path:'/index',
    component:Index,
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
