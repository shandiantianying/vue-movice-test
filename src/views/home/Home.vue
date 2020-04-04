<template>
  <div style="height: 100%;overflow: hidden">
    <div class="main-box" :style="mainBoxStyle">
      <router-view />
    </div>
    <div class="footer-box">
      <footer-box></footer-box>
    </div>
  </div>
</template>

<script>
import footerBox from "@/components/footerBox/FooterBox";
export default {
  name: "Home",
  data() {
    return {
      mainBoxStyle: {
        width: "100%",
        height: "",
        background: "#fff"
      }
    };
  },
  created() {
    this.$router.push("/defaultPage");
    this.mainBoxStyle.height = window.innerHeight - 50 + "px";
  },
  components: {
    footerBox
  }
};
</script>

<style>
.footer-box {
  width: 375px;
  height: 50px;
}
.main-box {
  overflow: auto;
  overflow-x: hidden;
}
</style>