<template>
  <view class="content">
    <view class="content_info">
      <button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
        <image :src="userAvatars" />
      </button>
      <view class="content_info_detail" @click="gotoLogin">
        <view class="content_info_detail_username">
          {{ userInfo.username }}
          <image class="content_info_detail_username_img" src="@img/editIcon.png" alt="" />
        </view>
        <span class="content_info_detail_text">ID: {{ userInfo.ID }}</span>
      </view>
    </view>
    <BoxComp />
    <OrderBox />
    <AppBox />
  </view>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'
import BoxComp from './components/BoxComp.vue'
import OrderBox from './components/OrderBox.vue'
import AppBox from './components/AppBox.vue'
import userAvatar from '@img/userAvatar.png'
defineOptions({
  name: 'IndividualCenter',
})
const title = ref<string>('Hello world')
const userAvatars = ref<string>(userAvatar)
const userInfo = reactive({
  username: '188****5553',
  ID: 292355,
})
onMounted(() => {
  checkLogin()
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
const checkLogin = () => {
  uni.checkSession({
    success: function (RES) {
      console.log('登录状态有效', RES)
    },
    fail: function () {
      console.log('登录状态过期')
      // 其他操作...
    },
  })
}
const onChooseAvatar = (e) => {
  const { avatarUrl } = e.detail
  console.log(avatarUrl)
  userAvatars.value = avatarUrl
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
    &_detail {
      &_username {
        // margin-bottom: 5px;
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 600;
        color: #333;
        &_img {
          width: 15px;
          height: 15px;
          cursor: pointer;
          margin-left: 10px;
        }
      }
      &_text {
        font-size: 14px;
        color: #999;
      }
    }
  }
}
.content::-webkit-scrollbar {
  display: none;
}
.avatar-wrapper {
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin-right: 10px;
  image {
    width: 100%;
    height: 100%;
  }
}
</style>
