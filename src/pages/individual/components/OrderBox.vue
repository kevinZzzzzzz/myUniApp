<template>
  <div class="OrderBox">
    <div class="OrderBox_header">
      <h1 class="OrderBox_header_title">我的订单</h1>
      <div class="OrderBox_header_right">
        <h6 class="OrderBox_header_right_text">全部订单</h6>
        <image class="OrderBox_header_right_img" src="@img/arrowRight.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'OrderBox',
})
</script>

<style scoped lang="scss">
.OrderBox {
  margin-top: 20px;
  // width: 100%;
  padding: 10px;
  background-color: #fff;
  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_title {
      font-size: 18px;
      font-weight: bold;
    }
    &_right {
      display: flex;
      cursor: pointer;
      align-items: center;
      &_text {
        font-size: 14px;
        font-weight: bold;
        color: #999;
        margin-left: 10px;
      }
      &_img {
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>
