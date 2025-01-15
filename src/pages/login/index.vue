<route lang="json5">
{
  style: {
    navigationBarTitleText: '登录',
    navigationBarBackgroundColor: '#e1f2fe',
  },
  layout: false, // 不使用默认布局
  needLogin: true,
}
</route>
<template>
  <div class="LoginPage">
    <div class="LoginPage_header">
      <h1 class="LoginPage_header_title">欢迎回来</h1>
      <p class="LoginPage_header_desc">请登录以继续使用</p>
    </div>
    <div class="LoginPage_main">
      <div class="LoginPage_main_nav">
        <div
          class="LoginPage_main_nav_item"
          v-for="item in loginWayList"
          :key="item.value"
          @click="handleChangeLoginWay(item.value)"
        >
          <div
            class="LoginPage_main_nav_item_label"
            :class="{ 'LoginPage_main_nav_item_label-active': loginWay === item.value }"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
      <div class="LoginPage_main_line">
        <wd-input
          clearable
          no-border
          custom-class="custom-input"
          size="large"
          type="number"
          v-model="loginInfo.info.phone"
          prefix-icon="user"
          placeholder="请输入手机号码"
        />
      </div>
      <div class="LoginPage_main_line" v-if="loginWay === 'password'">
        <wd-input
          clearable
          no-border
          custom-class="custom-input"
          size="large"
          type="password"
          v-model="loginInfo.info.password"
          prefix-icon="phone"
          placeholder="请输入密码"
        />
      </div>
      <div class="LoginPage_main_line" v-else>
        <wd-input
          clearable
          no-border
          custom-class="custom-input"
          size="large"
          v-model="loginInfo.info.authCode"
          use-suffix-slot
          prefix-icon="phone"
          placeholder="请输入验证码"
        >
          <template #suffix>
            <wd-button
              custom-class="custom-authCode custom-login-phone"
              v-if="waitAuthCode"
              :disabled="waitAuthTime"
              size="small"
            >
              {{ `重新发送（${waitAuthTime}s）` }}
            </wd-button>
            <wd-button
              v-else
              size="small"
              custom-class="custom-authCode custom-login-phone"
              @click="getAuthCode()"
            >
              获取验证码
            </wd-button>
          </template>
        </wd-input>
      </div>
      <div class="LoginPage_main_line">
        <wd-button
          block
          custom-class="custom-login custom-login-btn custom-login-phone"
          @click="handleLogin"
        >
          登录
        </wd-button>
      </div>
      <div class="LoginPage_main_line">
        <wd-divider>切换登录方式</wd-divider>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store'
import { isMp } from '@/utils/platform'
import { reactive, ref } from 'vue'

defineOptions({
  name: 'LoginPage',
})
type ILoginWay = 'password' | 'phone'
const sendMinute = 60
let waitTimer: any = null
const userStore = useUserStore()
const loginWayList = [
  { label: '密码登录', value: 'password' },
  { label: '验证码登录', value: 'phone' },
]
const waitAuthCode = ref(false) // 等待验证码
const waitAuthTime = ref(sendMinute) // 等待倒计时
const loginWay = ref<ILoginWay>('password')

const loginInfo = reactive({
  info: {
    phone: '',
    password: '',
    authCode: '',
  },
})

// 切换登录方式
const handleChangeLoginWay = (way) => {
  loginWay.value = way
}
const handleLogin = () => {
  // xxx
}
// 获取验证码
const getAuthCode = () => {
  if (waitAuthCode.value) return false
  waitAuthCode.value = true
  waitTimer = setInterval(() => {
    waitAuthTime.value -= 1
    if (waitAuthTime.value <= 0) {
      clearInterval(waitTimer)
      waitAuthTime.value = 60
      waitAuthCode.value = false
    }
  }, 1000)
}
</script>

<style scoped lang="scss">
.LoginPage {
  width: 100%;
  // background-color: #e1f2fe;
  padding: 0 24px;
  &_header {
    width: 100%;
    &_title {
      margin-top: 48px;
      font-size: 36px;
      font-family: Roboto;
      color: #111827;
    }
    &_desc {
      margin-top: 8px;
      font-family: Roboto;
      font-size: 14px;
      font-weight: normal;
      line-height: 21px;
      letter-spacing: 0px;
      color: #6b7280;
    }
  }
  &_main {
    width: 100%;
    margin-top: 32px;
    &_nav {
      // height: 36px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-radius: 12px;
      opacity: 1;
      box-sizing: border-box;
      border: 1px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
      box-shadow:
        0px 4px 6px -4px rgba(0, 0, 0, 0.1),
        0px 10px 15px -3px rgba(0, 0, 0, 0.1);
      // padding: 8px 0;
      background: #fbfdff;
      &_item {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &_label {
          padding: 10px 50px;
          border-radius: 12px;
          // height: 100%;
          text-align: center;
          font-family: Roboto;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: 0px;
          color: #111827;
          &-active {
            background: #fff;
          }
        }
      }
    }

    &_line {
      width: 100%;
      height: 48px;
      margin-top: 32px;
    }
  }
}

:deep() {
  .custom-input {
    width: 100%;
    border-radius: 12px;
    opacity: 1;
    background: rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    border: 1px solid rgba(229, 231, 235, 0.5);
  }
  .custom-login {
    width: 100%;
  }
  .custom-login-btn {
    height: 48px !important;
  }
  .custom-authCode {
    margin-left: 5px;
  }
  .custom-login-phone {
    // height: 48px !important;
    border-radius: 4px !important;
    opacity: 1;
    box-shadow:
      0px 4px 6px -4px rgba(77, 172, 240, 0.3),
      0px 10px 15px -3px rgba(77, 172, 240, 0.3);
    background: linear-gradient(90deg, #4dacf0 0%, #7bc2f5 100%) !important;
  }
}
</style>
