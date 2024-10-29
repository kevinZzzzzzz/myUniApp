<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '抽奖' },
}
</route>

<template>
  <view class="PrizeDraw">
    <div class="PrizeDraw_content">
      <div class="PrizeDraw_content_box"></div>
      <div class="PrizeDraw_content_line1">
        <div class="PrizeDraw_content_line1_btn">
          <p class="PrizeDraw_content_line1_btn_text">剩余宝箱</p>
          <h4 class="PrizeDraw_content_line1_btn_text">10元/个</h4>
        </div>
      </div>
      <div class="PrizeDraw_content_line2">
        <div class="PrizeDraw_content_line2_btn">
          <p class="PrizeDraw_content_line2_btn_text">购买一个</p>
        </div>
        <div class="PrizeDraw_content_line2_btn">
          <p class="PrizeDraw_content_line2_btn_text">购买十个</p>
        </div>
      </div>
      <div class="PrizeDraw_content_line3">
        <div class="PrizeDraw_content_line3_btn">
          <p class="PrizeDraw_content_line3_btn_text">已发入魂</p>
        </div>
        <div class="PrizeDraw_content_line3_btn">
          <p class="PrizeDraw_content_line3_btn_text">十连好运</p>
        </div>
      </div>
    </div>
  </view>
  <view>
    <!-- <uni-popup ref="popup" background-color="#fff" type="center" @change="change">
      <view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
        <text class="text">popup 内容</text>
      </view>
    </uni-popup> -->
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
defineOptions({
  name: 'PrizeDraw',
})
</script>

<style lang="scss" scoped>
.PrizeDraw {
  height: 100vh;
  background-color: #c7e8ef;
  position: relative;
  &_content {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    &_box {
      width: 200px;
      height: 200px;
      border: 1px solid #ccc;
      background-color: #fff;
    }
    &_line1 {
      margin-top: 20px;
      &_btn {
        text-align: center;
        padding: 5px 20px;
        border: 1px solid #ccc;
        background-color: #fff;
        &_text {
          font-size: 16px;
          color: #000;
        }
      }
    }
    &_line2 {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
      &_btn {
        text-align: center;
        padding: 5px 20px;
        border: 1px solid #ccc;
        background-color: #fff;
        &_text {
          font-size: 16px;
          color: #000;
        }
      }
    }
    &_line3 {
      margin-top: 60px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 80px;
      &_btn {
        text-align: center;
        padding: 5px 20px;
        border: 1px solid #ccc;
        background-color: #fff;
        &_text {
          font-size: 16px;
          color: #000;
        }
      }
    }
  }
}
</style>
