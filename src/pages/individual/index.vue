<template>
  <view class="content">
    <view class="content_info">
      <img class="content_info_img" src="@img/userAvatar.png" />
      <view class="">
        <p>
          {{ userInfo.username }}
          <img src="@img/editIcon.png" alt="" />
        </p>
        <span>ID: {{ userInfo.ID }}</span>
      </view>
    </view>
    <!-- <BoxComp />
    <OrderBox />
    <AppBox /> -->
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
defineOptions({
  name: 'IndividualCenter',
})
const title = ref<string>('Hello world')
const userInfo = reactive({
  username: '188****5553',
  ID: 292355,
})
</script>

<style lang="scss">
page {
  background-color: #eee;
}
</style>
<style scoped lang="scss">
.content {
  padding: 0 12px;
  overflow-y: scroll;
  background-color: '#eee';
  &_info {
    display: flex;
    align-items: center;
    padding: 10px 0 20px 10px;
    margin: 0 -12px;
    background-color: #fff;
    // margin-bottom: 20px;
    &_img {
      width: 45px;
      height: 45px;
      margin-right: 10px;
    }
    p {
      margin-bottom: 5px;
      img {
        width: 12px;
        cursor: pointer;
      }
    }
    span {
      font-size: 14px;
      color: #999;
    }
  }
}
.content::-webkit-scrollbar {
  display: none;
}
</style>
