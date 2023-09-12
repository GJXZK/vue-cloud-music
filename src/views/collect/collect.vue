<template>
  <div class="video">
    <h1>收藏</h1>
  </div>
</template>

<script>
import { getUserSublistArtist,getUserSublistAlbum,getUserSublistMV } from '@/API/userApi';
export default {
  name: "myVideo",
  data(){
    return {
        SubArtists:[],
        SubAlbums:[],
        SubMV:[]
    }
  },
  methods:{
    async getSubArtists(){
        this.SubArtists = await getUserSublistArtist()
        console.log(this.SubArtists);
    },
    async getSubAlbums(){
        this.SubAlbums = await getUserSublistAlbum()
        console.log(this.SubAlbums);
    },
    async getSubMV(){
        this.SubMV = await getUserSublistMV()
        console.log(this.SubMV);
    }
  },
  mounted() {
    this.getSubArtists()
    this.getSubAlbums()
    this.getSubMV()
  },
};
</script>

<style></style>
