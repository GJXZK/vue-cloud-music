<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {getBannerList} from '@/API/index'
export default {
  created(){
    this.getBannerList()
  },
  methods:{
    async getBannerList(){
      const res = await getBannerList()
      console.log(res);
    }
  }
}
</script>

<style>

</style>
