import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () =>import('@/components/Index')

Vue.use(VueRouter)

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
