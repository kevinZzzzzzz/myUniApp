<template>
  <div class="OrderBox">
    <div class="OrderBox_header">
      <h1 class="OrderBox_header_title">我的订单</h1>
      <div class="OrderBox_header_right">
        <h6 class="OrderBox_header_right_text">全部订单</h6>
        <image class="OrderBox_header_right_img" src="@img/arrowRight.png" alt="" />
      </div>
    </div>
    <div class="OrderBox_content">
      <ul class="OrderBox_content_list">
        <li class="OrderBox_content_list_item" v-for="(item, idx) in orderStatus" :key="idx">
          <wd-badge :modelValue="item.value" max="99">
            <image class="OrderBox_content_list_item_img" :src="`/static/image/${item.icon}.png`" />
            <p class="OrderBox_content_list_item_text">{{ item.name }}</p>
          </wd-badge>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'OrderBox',
})
const orderStatus = reactive([
  {
    name: '待付款',
    icon: 'stayPayIcon',
    value: 9,
  },
  {
    name: '待发货',
    icon: 'stayDeliverIcon',
    value: 9,
  },
  {
    name: '待收货',
    icon: 'stayReceiveIcon',
    value: 9,
  },
  {
    name: '已完成',
    icon: 'finishIcon',
    value: 9,
  },
])
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
  &_content {
    margin-top: 20px;
    &_list {
      display: flex;
      justify-content: space-around;
      &_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        &_img {
          width: 30px;
          height: 30px;
        }
        &_text {
          font-size: 14px;
          font-weight: bold;
          color: #999;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
