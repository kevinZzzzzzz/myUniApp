<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <div class="home">
    <div class="home_header">
      <ul class="home_header_list">
        <li class="home_header_list_item" v-for="(item, idx) in tips" :key="idx">
          <image class="home_header_list_item_img" :src="`/static/image/${item.icon}.png`" alt="" />
          <p class="home_header_list_item_text">{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <div class="home_activity">活动展示</div>
    <view class="uni-margin-wrap">
      <swiper class="swiper" circular :indicator-dots="true">
        <swiper-item>
          <view class="swiper-item uni-bg-red">A</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-green">B</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-blue">C</view>
        </swiper-item>
      </swiper>
    </view>
    <div class="home_special">特殊活动</div>
    <div class="home_goods">
      <div class="home_goods_list">
        <GoodsItem v-for="(item, idx) in 20" :key="idx">{{ item }}</GoodsItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import PLATFORM from '@/utils/platform'
import GoodsItem from './components/goodsItem.vue'

defineOptions({
  name: 'Home',
})
const tips: any[] = [
  {
    name: '全新正品',
    icon: 'shouquanzhengpin',
  },
  {
    name: '精选好物',
    icon: 'haowu',
  },
  {
    name: '极速发货',
    icon: 'shandianfahuo',
  },
]
</script>

<style scoped lang="scss">
.home {
  padding: 16px;

  &_header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    &_list {
      width: fit-content;
      display: grid;
      grid-template-columns: repeat(3, 65px);
      grid-gap: 10px;
      padding: 5px 12px;
      justify-content: right;
      background-image: linear-gradient(to right, #f7faa9, #8bfff5);

      &_item {
        display: flex;
        align-items: center;
        &_img {
          width: 12px;
          height: 12px;
          margin-right: 5px;
        }
        &_text {
          font-size: 12px;
        }
      }
    }
  }
  &_activity {
    @include CenterHorVertical();
    width: 100%;
    height: 200px;
    background-color: #ccc;
    margin-bottom: 10px;
  }
  &_special {
    @include CenterHorVertical();
    width: 100%;
    height: 100px;
    background-color: #ccc;
    margin-bottom: 10px;
  }
  &_goods {
    &_list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
  }
}

.uni-margin-wrap {
  width: 690rpx;
  width: 100%;
  margin-bottom: 10px;
}
.swiper {
  height: 300rpx;
}
.swiper-item {
  display: block;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
}
.swiper-list {
  margin-top: 40rpx;
  margin-bottom: 0;
}
.uni-bg-red {
  background: red;
}
.uni-bg-green {
  background: green;
}
.uni-bg-blue {
  background: blue;
}
</style>
