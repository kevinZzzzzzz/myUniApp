<template>
  <div class="AppBox">
    <div class="AppBox_header">
      <h1 class="AppBox_header_title">我的应用</h1>
      <div class="AppBox_header_right"></div>
    </div>
    <div class="AppBox_content">
      <ul class="AppBox_content_list">
        <li class="AppBox_content_list_item" v-for="(item, idx) in orderStatus" :key="idx">
          <image class="AppBox_content_list_item_img" :src="`/static/image/${item.icon}.png`" />
          <p class="AppBox_content_list_item_text">{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'AppBox',
})
const orderStatus = reactive([
  {
    name: '地址管理',
    icon: 'dizhiguanli',
  },
  {
    name: '地址管理',
    icon: 'dizhiguanli',
  },
  {
    name: '地址管理',
    icon: 'dizhiguanli',
  },
  {
    name: '地址管理',
    icon: 'dizhiguanli',
  },
])
</script>

<style scoped lang="scss">
.AppBox {
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
