<template>
  <div class="SearchSinger">
    <h1>搜索歌手</h1>
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$store.state.searchKeyword);
  }
}
</script>

<style>

</style>