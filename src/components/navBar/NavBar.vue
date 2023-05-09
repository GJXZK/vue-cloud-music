<template>
    <!-- 可复用nav  -->
  <div class="navBarContainer">
    <div class="navBar">
      <div
        class="barItem"
        :class="index == activeNum ? 'active' : '' "
        v-for="(item,index) in navBarData"
        :key="index"
        @click="clickBarItem(item.path,index)"
      >
      {{ item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props:["navBarData"],
  data() {
    return {
      activeNum: 0
    };
  },
  created(){

  },
  methods: {
    clickBarItem(path,index) {
      if (this.activeNum == index) {
        return;
      }

        console.log(path);
        this.activeNum = index;
        this.$emit("clickBarItem", path);
    }
  }
};
</script>

<style lang="less" scoped>
.navBarContainer {
  height: 60px;
  width: 100%;
  position: relative;
  .navBar {
    display: flex;
    position: relative;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    color: rgb(49, 49, 49);
    align-items: center;
    padding: 10px 0 20px 20px;
    .barItem {
      font-size: 13px;
      margin: 0 10px;
      text-align: center;
      cursor: pointer;
    }
    .active {
      font-size: 16px;
      color: black;
      font-weight: 600;
      padding-bottom: 5px;
      border-bottom: 3px solid #ec4141;
      transform: translateY(4px);
    }
  }
}
</style>