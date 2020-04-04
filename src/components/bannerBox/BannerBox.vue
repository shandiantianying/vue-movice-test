<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in hotList" :key="index">
        <img :src="item.imgLongUrl" alt class="image-box" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import movieList from "@/data/movieList";
export default {
  name: "bannerBox",
  data() {
    return {
      hotList: []
    };
  },
  mounted() {
    this.hotList = movieList.hotList;
  }
};
</script>


<style lang="less">
// .item-box {
//   width: 375px;
//   height: 180px;
// }
.image-box {
  width: 100%;
  height: 220px;
}
</style>