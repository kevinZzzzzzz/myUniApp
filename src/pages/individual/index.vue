<template>
  <view class="content">
    <view class="content_info">
      <img class="content_info_img" src="@img/userAvatar.png" />
      <view class="content_info_detail" @click="gotoLogin">
        <view class="content_info_detail_username">
          {{ userInfo.username }}
          <img class="content_info_detail_username_img" src="@img/editIcon.png" alt="" />
        </view>
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
const gotoLogin = () => {
  uni.login({
    provider: 'weixin',
    success: function (res) {
      console.log(res, 'res')
      const code = res.code // 微信登录凭证
      // 其他操作...
      uni.getUserInfo({
        provider: 'weixin',
        success: function (res) {
          const userInfo = res.userInfo // 用户信息
          console.log(res, 'res1')
          // 其他操作...
        },
        fail: function (err) {
          console.log(err, 'err1')
        },
      })
    },
    fail: function (err) {
      console.log(err, 'err2')
    },
  })
}
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
    &_detail {
      &_username {
        margin-bottom: 5px;
        display: flex;
        &_img {
          width: 12px;
          height: 12px;
          cursor: pointer;
        }
      }
      span {
        font-size: 14px;
        color: #999;
      }
    }
  }
}
.content::-webkit-scrollbar {
  display: none;
}
</style>
