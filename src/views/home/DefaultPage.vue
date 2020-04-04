<template>
  <div>
    <banner-box></banner-box>
    <div class="content-box">
      <!--搜索框-->
      <div class="search-box">
        <div class="address-box" @click="cityBtn">
          <span class="iconfont icondingwei" style="color: #666;font-size: 10px"></span>
          {{LocationCity}}
        </div>
        <div class="search-input">
          <van-search placeholder="请输入你想搜索的内容" v-model="searchData" />
        </div>
        <div class="scan-box">
          <span class="iconfont iconscan" style="font-size: 22px;"></span>
        </div>
      </div>

      <!--热映-->
      <div class="hot-box">
        <div class="hot-title">
          <div class="hot-text">正在热映</div>
          <div class="hot-more">
            全部37部
            <van-icon name="arrow" />
          </div>
        </div>

        <div class="hot-swiper">
          <van-swipe @change="onChange">
            <van-swipe-item v-for="(item,index) in hotList" :key="index">
              <div class="hot-item-box">
                <div class="hot-item-img">
                  <img :src="item.imgUrl" alt />
                </div>
                <div class="hot-item-info">
                  <div class="hot-item-title">
                    <div class="item-title">{{item.name}}</div>
                    <div class="item-title-icon">{{item.hallType}}</div>
                  </div>
                  <div class="hot-item-alias">{{item.alias}}</div>
                  <div class="hot-item-performer">主演:{{item.leader}}</div>
                  <div class="hot-item-director">导演:{{item.director}}</div>
                  <div class="hot-item-score">
                    <div class="item-score-text">淘票票评分</div>
                    <div class="item-score-num">{{item.score}}</div>
                    <div class="item-score-btn">购票</div>
                  </div>
                </div>
              </div>
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator"></div>
          </van-swipe>
        </div>

        <!--即将上映-->
        <div class="soon-box">
          <div class="soon-title">
            <div class="soon-text">即将上映</div>
            <div class="soon-more">
              全部120部
              <van-icon name="arrow" />
            </div>
          </div>
          <template>
            <erect-movie-item :data="moreList"></erect-movie-item>
          </template>
        </div>

        <!--优酷热播-->
        <div class="play-box">
          <div class="play-title">
            <div class="play-text">优酷点播剧场</div>
            <div class="play-more">
              查看全部
              <van-icon name="arrow" />
            </div>
          </div>

          <div class="play-list">
            <div v-for="(item,index) in playList" :key="index">
              <div class="play-item" style v-if="index%2 == 0">
                <div class="play-img">
                  <img :src="item.imgLongUrl" alt />
                </div>
                <div class="play-item-title">
                  <div class="play-item-title-icon">
                    <span
                      class="iconfont iconbofang"
                      style="color: rgb(235,52,44);font-size: 16px;line-height: 20px"
                    ></span>
                  </div>
                  <div class="play-item-title-text">{{item.name}}</div>
                </div>
                <div class="play-item-info">{{item.alias}}</div>
              </div>
              <div class="play-item" style="margin-left: 15px" v-if="index%2 != 0">
                <div class="play-img">
                  <img :src="item.imgLongUrl" alt />
                </div>
                <div class="play-item-title">
                  <div class="play-item-title-icon">
                    <span
                      class="iconfont iconbofang"
                      style="color: rgb(235,52,44);font-size: 16px;line-height: 20px"
                    ></span>
                  </div>
                  <div class="play-item-title-text">{{item.name}}</div>
                </div>
                <div class="play-item-info">{{item.alias}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bannerBox from "@/components/bannerBox/BannerBox";
import movieList from "@/data/movieList";
import ErectMovieItem from "@/components/movieItem/ErectMovieItem";
export default {
  name: "DefaultPage",
  data() {
    return {
      LocationCity: "待定位...",
      searchData: "",
      current: 0,
      hotList: [],
      moreList: [],
      playList: []
    };
  },
  components: {
    bannerBox,
    ErectMovieItem
  },
  mounted() {
    // this.city()
    this.hotList = movieList.hotList;
    this.moreList = movieList.moreList;
    this.playList = movieList.playList;
  },
  methods: {
    //定义获取城市方法
    // city() {
    //     const geolocation = new BMap.Geolocation();
    //     var _this = this
    //     geolocation.getCurrentPosition(function getinfo(position) {
    //         let city = position.address.city;             //获取城市信息
    //         let province = position.address.province;    //获取省份信息
    //         _this.LocationCity = city
    //     }, function (e) {
    //         _this.LocationCity = "定位失败"
    //     }, {provider: 'baidu'});
    // },
    //

    //hot-swiper
    onChange(index) {
      this.current = index;
    },
    cityBtn() {
      console.log("222");
      this.$router.push("/getAddress");
    }
  }
};
</script>

<style>
.hot-swiper {
  width: auto;
  height: 145px;
}

.hot-item-box {
  width: 350px;
  height: 145px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.hot-item-img {
  float: left;
  width: 110px;
  height: 145px;
  overflow: hidden;
}
.hot-item-img img {
  width: 110px;
  height: 145px;
}
.hot-item-info {
  float: left;
  width: 215px;
  padding: 10px;
}
.hot-item-title {
  width: auto;
  height: 22px;
}
.item-title {
  float: left;
  font-size: 16px;
  color: #15171a;
  font-weight: 400;
  line-height: 22px;
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-title-icon {
  float: left;
  margin-left: 10px;
  padding: 0 5px;
  height: 18px;
  border: 1px solid #eab826;
  background: #ffffff;
  border-radius: 2px;
  color: #eab826;
  font-size: 11px;
  font-weight: 400;
  line-height: 18px;
}
.hot-item-alias {
  width: auto;
  height: 22px;
  color: #969ba6;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hot-item-performer {
  width: auto;
  height: 22px;
  color: #5b5f66;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hot-item-director {
  width: auto;
  height: 22px;
  color: #5b5f66;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hot-item-score {
  width: 100%;
  height: 35px;
}
.item-score-text {
  float: left;
  padding-top: 15px;
  width: 65px;
  height: 15px;
  color: #c3c6cc;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
}
.item-score-num {
  float: left;
  margin-left: 5px;
  padding-top: 10px;
  width: 30px;
  height: 23px;
  color: #2997f5;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
}
.item-score-btn {
  float: right;
  text-align: center;
  width: 52px;
  height: 30px;
  background-image: linear-gradient(135deg, #e82c2c, #e94616);
  border-radius: 2px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
}
.content-box {
  position: relative;
  top: -20px;
}
.search-box {
  display: flex;
  flex-start: center;
  width: 100%;
  height: 62px;
  background: #ffffff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
}
.search-input {
  flex: 1;
  height: 62px;
}
.address-box {
  text-align: center;
  width: 80px;  
  vertical-align: middle;
  line-height: 62px;
  color: #333;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.scan-box {
  width: 52px;
  height: 62px;
  font-size: 20px;
  text-align: center;
  color: #333;
  line-height: 62px;
}

/* .address-box {
  float: left;
  width: 80px;
  height: 62px;
  text-align: center;
  line-height: 62px;
  color: #333;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.search-input {
  float: left;
  width: 280px;
  height: 62px;
}
.scan-box {
  float: right;
  width: 52px;
  height: 62px;
  font-size: 20px;
  text-align: center;
  color: #333;
  line-height: 62px;
} */

/*热映*/
.hot-box {
  width: auto;
  height: 205px;
  padding: 0 10px;
}
.hot-title {
  width: 100%;
  margin-top: 10px;
  height: 50px;
  line-height: 50px;
}
.hot-text {
  float: left;
  text-align: left;
  width: 50%;
  height: 50px;
  color: #15171a;
  font-size: 18px;
  font-weight: 400;
  line-height: 50px;
}
.hot-more {
  float: left;
  width: 50%;
  height: 50px;
  color: #c3c6cc;
  font-size: 12px;
  font-weight: 400;
  text-align: right;
  line-height: 50px;
}

/*即将上映*/
.soon-box {
  width: auto;
  padding: 0 10px;
}

.soon-title {
  width: 100%;
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
}
.soon-text {
  float: left;
  text-align: left;
  width: 50%;
  height: 40px;
  color: #15171a;
  font-size: 18px;
  font-weight: 400;
  line-height: 40px;
}
.soon-more {
  float: left;
  width: 50%;
  height: 40px;
  color: #c3c6cc;
  font-size: 12px;
  font-weight: 400;
  text-align: right;
  line-height: 40px;
}
.play-box {
  width: auto;
  padding: 0 10px;
}
.play-title {
  width: 100%;
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
}
.play-text {
  float: left;
  text-align: left;
  width: 50%;
  height: 40px;
  color: #15171a;
  font-size: 18px;
  font-weight: 400;
  line-height: 40px;
}
.play-more {
  float: left;
  width: 50%;
  height: 40px;
  color: #c3c6cc;
  font-size: 12px;
  font-weight: 400;
  text-align: right;
  line-height: 40px;
}

.play-list {
  width: auto;
  margin-top: 10px;
}
.play-item {
  float: left;
  width: 48%;
  height: 190px;
}
.play-img {
  width: 178px;
  height: 120px;
  border-radius: 5px;
  overflow: hidden;
}
.play-img img {
  width: 178px;
  height: 120px;
}
.play-item-title {
  width: auto;
  height: 20px;
  margin-top: 10px;
}
.play-item-title-icon {
  float: left;
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.play-item-title-text {
  float: left;
  width: 135px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 20px;
  color: #15171a;
  font-size: 16px;
  margin-left: 3px;
}
.play-item-info {
  width: auto;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #969ba6;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 3px;
}
</style>