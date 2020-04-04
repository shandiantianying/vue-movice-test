<template>
  <div>
    <div class="hot-item">
      <div class="hot-item-img">
        <img :src="data.imgUrl" alt />
      </div>
      <div class="hot-item-info">
        <div class="hot-item-info-title">
          <div class="hot-item-title">{{data.name}}</div>
          <div class="hot-item-title-icon">{{data.hallType}}</div>
        </div>
        <div class="hot-item-info-alias">{{data.alias}}</div>
        <div class="hot-item-info-leader">{{data.leader}}</div>
        <div class="hot-item-info-director">{{data.director}}</div>
        <div class="hot-item-info-btn">
          <div class="hot-btn-text">
            <span class="hot-text-msg">淘票票评分</span>
            <span class="hot-text-number">{{data.score}}</span>
          </div>
          <div class="hot-buy-btn">购票</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviceItem",
  props: {
    data: Object
  }
};
</script>

<style>
.hot-item {
  display: flex;
  margin-top: 10px;
}
.hot-item-info {
  display: flex;
  flex-direction: column;
}
.hot-item-info-title {
  display: flex;
  flex-direction: row;
}

.hot-item-title-icon {
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

.hot-item-info-alias {
  width: auto;
  height: 30px;
  line-height: 30px;
  color: #969ba6;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hot-item-info-btn {
  display: flex;
  flex-direction: row;
  justify-content:space-between;
}

.hot-text-msg {
  line-height: 45px;
  font-size: 12px;
  color: #c3c6cc;
}
.hot-text-number {
  margin-left: 10px;
  line-height: 45px;
  font-size: 18px;
  color: #2997f5;
}
.hot-buy-btn {
  float: right;
  margin-right: 15px;
  width: 52px;
  height: 28px;
  background: #e8342c;
  border-radius: 3px;
  color: #fff;
  line-height: 28px;
  font-size: 14px;
  text-align: center;
}

.hot-item-info-leader {
  width: auto;
  margin-top: 5px;
  height: 20px;
  font-size: 12px;
  color: #5b5f66;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hot-item-info-director {
  width: auto;
  height: 20px;
  font-size: 12px;
  color: #5b5f66;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>