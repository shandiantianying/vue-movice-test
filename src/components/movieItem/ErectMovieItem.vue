<template>
  <div>
    <div class="soon-swipe">
      <div class="item-box">
        <div class="soon-item" v-for="(item,index) in data" :key="index">
          <div class="soon-img">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="soon-info">
            <p class="soon-item-title">{{item.name}}</p>
            <p class="soon-item-time">
              {{new Date(item.playTime).toLocaleDateString()}}
              <span>上映</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErectMovieItem",
  props: {
    data: Array
  }
};
</script>

<style>
.soon-swipe {
  width: 100%;
  height: 206px;
  overflow: scroll;
  overflow-y: hidden;
}
.item-box {
  width: 800px;
  height: 206px;
  padding: 0 20px 0 0;
}
.soon-item {
  float: left;
  margin-left: 10px;
  width: 104px;
  height: 206px;
}
.soon-item:nth-child(1) {
  margin-left: 0;
}
.soon-item img {
  width: 104px;
  height: 136px;
}
.soon-swipe::-webkit-scrollbar {
  display: none;
}
.soon-img {
  margin-top: 15px;
}
.soon-info {
  width: 104px;
  height: 40px;
}
.soon-item-title {
  width: 104px;
  height: 20px;
  line-height: 20px;
  color: #15171a;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.soon-item-time {
  width: 104px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #969ba6;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>