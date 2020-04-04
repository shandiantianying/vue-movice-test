<template>
  <div>
    <van-tabbar v-model="active" active-color="#E8342C" @change="changePage">
      <van-tabbar-item icon="diamond">首页</van-tabbar-item>
      <van-tabbar-item icon="video">电影</van-tabbar-item>
      <van-tabbar-item icon="play-circle">演出</van-tabbar-item>
      <van-tabbar-item icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "FooterBox",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    changePage() {
      if (this.active == 0) {
        this.$router.push("/defaultPage");
      } else if (this.active == 1) {
        this.$router.push("/movie");
      } else if (this.active == 2) {
        this.$router.push("/show");
      } else if (this.active == 3) {
        this.$router.push("/mine");
      }
    }
  }
};
</script>

<style>
</style>