<template>
  <div>
    <div class="movie-box">
      <div class="header-nav" style="z-index: 1000;">
        <div class="header-box">
          <div class="header-address">
            <div class="address-box">
              <span class="iconfont icondingwei" style="color: #5b5f66;font-size: 10px"></span>
              {{LocationCity}}
            </div>
          </div>
          <div class="header-tab">
            <div class="header-tab-box">
              <div :class="tabActive==0?'tab-item-active':'tab-item'" @click="changeActive(0)">电影</div>
              <div :class="tabActive==1?'tab-item-active':'tab-item'" @click="changeActive(1)">影院</div>
            </div>
          </div>
          <div class="header-search">
            <i class="iconfont iconsousuo"></i>
          </div>
        </div>
      </div>

      <div class="movie-content">
        <div class="content-box" v-if="tabActive == 0">
          <van-tabs v-model="active" style="border: none;">
            <van-tab title="正在热映">
              <div class="hot-list">
                <div v-for="(item,index) in hotList" :key="index">
                  <movie-item :data="item"></movie-item>
                </div>
              </div>
            </van-tab>
            <van-tab title="即将上映">
              <div class="more-list">
                <div class="more-list-title">近期最受欢迎</div>
                <div>
                  <erect-movie-item :data="moreList"></erect-movie-item>
                </div>
              </div>
              <div class="now-list"></div>
            </van-tab>
          </van-tabs>
        </div>
        <div class="content-box" v-if="tabActive == 1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from "@/components/movieItem/MovieItem";
import movieList from "@/data/movieList";
import ErectMovieItem from "@/components/movieItem/ErectMovieItem";
export default {
  name: "Movie",
  data() {
    return {
      LocationCity: "定位中...",
      tabActive: 0,
      active: 0,
      hotList: [],
      moreList: ""
    };
  },
  components: {
    MovieItem,
    ErectMovieItem
  },
  methods: {
    //定义获取城市方法
    city() {
      const geolocation = new BMap.Geolocation();
      var _this = this;
      geolocation.getCurrentPosition(
        function getinfo(position) {
          let city = position.address.city; //获取城市信息
          let province = position.address.province; //获取省份信息
          _this.LocationCity = city;
        },
        function(e) {
          _this.LocationCity = "定位失败";
        },
        { provider: "baidu" }
      );
    },
    changeActive(index) {
      this.tabActive = index;
    }
  },
  mounted() {
    // this.city();
    this.hotList = movieList.hotList;

    this.moreList = movieList.moreList;
    console.log(this.hotList);
  }
};
</script>

<style >
.movie-box {
  width: 375px;
}
.header-nav {
  position: fixed;
  top: 0;
  width: 375px;
  height: 44px;
  background: #fff;
  z-index: 1000;
}
.header-box {
  position: relative;
  width: 345px;
  margin: 0 auto;
  height: 44px;
  background: #fff;
}
.header-address {
  position: absolute;
  left: 0;
  height: 44px;
  line-height: 44px;
  color: #000;
}

.address-box {
  text-align: center;
  line-height: 44px;
  color: #5b5f66;
  font-size: 14px;
}
.header-tab {
  position: absolute;
  left: 50%;
  top: 8px;
  margin-left: -52px;
  width: 104px;
  height: 28px;
}
.header-search {
  position: absolute;
  right: 0;
  width: 20px;
  height: 44px;
}
i {
  font-size: 18px;
  line-height: 44px;
  text-align: center;
  color: #15171a;
}
.item-tab-active {
  color: #fff;
  background: #e8342c;
}
.tab-item {
  float: left;
  width: 50%;
  height: 28px;
  text-align: center;
  line-height: 28px;
  font-size: 14px;
  color: #e8342c;
  background: #fff;
}
.tab-item-active {
  float: left;
  width: 50%;
  height: 28px;
  text-align: center;
  line-height: 28px;
  font-size: 14px;
  color: #fff;
  background: #e8342c;
}

.header-tab {
  position: absolute;
  left: 50%;
  top: 8px;
  margin-left: -52px;
  width: 104px;
  height: 28px;
}
.header-search {
  position: absolute;
  right: 0;
  width: 20px;
  height: 44px;
  i {
    font-size: 18px;
    line-height: 44px;
    text-align: center;
    color: #15171a;
  }
}
.item-tab-active {
  color: #fff;
  background: #e8342c;
}
.header-tab-box {
  width: 104px;
  height: 28px;
  border-radius: 3px;
  border: 1px solid #e8342c;
}
.tab-item {
  float: left;
  width: 50%;
  height: 28px;
  text-align: center;
  line-height: 28px;
  font-size: 14px;
  color: #e8342c;
  background: #fff;
}
.tab-item-active {
  float: left;
  width: 50%;
  height: 28px;
  text-align: center;
  line-height: 28px;
  font-size: 14px;
  color: #fff;
  background: #e8342c;
}

.movie-content {
  width: 100%;
  padding-top: 60px;
}
.content-box {
  width: 100%;
}
.van-tabs__wrap {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08) !important;
}

.hot-list {
  width: 345px;
  margin: 0 auto;
  padding-bottom: 20px;
}
.more-list {
  width: auto;
  height: 235px;
  padding: 15px;
}
.more-list-title {
  width: auto;
  height: 40px;
  line-height: 40px;
  color: #15171a;
  font-size: 18px;
  font-weight: 400;
}
</style>