<template>
  <div>
    <van-nav-bar
      title="选择位置定位"
      left-text="返回"
      right-text="确认"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <template>
      <baidu-map class="map" center="广州">
        <bm-geolocation
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :showAddressBar="true"
          :autoLocation="true"
          @locationSuccess="getAddressInfo"
          @locationError="getAddressErr"
        ></bm-geolocation>
      </baidu-map>
    </template>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "GetAddress",
  data() {
    return {
      point: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      if (this.point == "") {
        Toast.fail("请先点击定位按钮进行定位");
      } else {
        localStorage.setItem("userPoint", JSON.stringify(this.point));

        this.$router.go(-1);
      }
    },
    getAddressInfo(point, AddressComponent, marker) {
      console.log(point);
    },
    getAddressErr(err) {
      Toast.fail("定位失败");
    }
  }
};
</script>

<style>
    .map {
        width: 100%;
        height:600px;
    }
</style>