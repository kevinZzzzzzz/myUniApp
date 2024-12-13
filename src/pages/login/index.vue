<route lang="json5">
{
  style: {
    navigationBarTitleText: '登录',
  },
  needLogin: true,
}
</route>
<template>
  <div class="LoginPage page">
    <div class="LoginPage_block">
      <div class="LoginPage_block_main">
        <h2 class="LoginPage_block_main_title">Hi welcome ~</h2>
        <div class="LoginPage_block_main_line">
          <p class="LoginPage_block_main_line_label">手机号码</p>
          <wd-input
            clearable
            type="number"
            v-model="loginInfo.info.phone"
            prefix-icon="user"
            placeholder="请输入手机号码"
          />
        </div>
        <div class="LoginPage_block_main_line">
          <div class="LoginPage_block_main_line_way" v-if="loginWay === 'password'">
            <p class="LoginPage_block_main_line_label">密码</p>
            <wd-input
              clearable
              type="password"
              v-model="loginInfo.info.password"
              prefix-icon="phone"
              placeholder="请输入密码"
            />
          </div>
          <div class="LoginPage_block_main_line_way" v-if="loginWay === 'phone'">
            <p class="LoginPage_block_main_line_label">验证码</p>
            <wd-input
              clearable
              type="number"
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
        </div>
        <div class="LoginPage_block_main_line">
          <wd-button block custom-class="custom-login custom-login-phone">登录</wd-button>
        </div>
      </div>
      <div class="LoginPage_block_bottom">
        <wd-divider>切换登录方式</wd-divider>
        <wd-button
          v-if="loginWay === 'password'"
          block
          custom-class="custom-login custom-login-phone"
          @click="handleChangeLoginWay('phone')"
        >
          验证码登录
        </wd-button>
        <wd-button
          v-else-if="loginWay === 'phone'"
          block
          custom-class="custom-login custom-login-phone"
          @click="handleChangeLoginWay('password')"
        >
          密码登录
        </wd-button>
        <wd-button block custom-class="custom-login custom-login-weixin">微信登录</wd-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
defineOptions({
  name: 'LoginPage',
})
type ILoginWay = 'wechat' | 'password' | 'phone'
const sendMinute = 60
let waitTimer: any = null

const waitAuthCode = ref(false) // 等待验证码
const waitAuthTime = ref(sendMinute) // 等待倒计时
const loginWay = ref<ILoginWay>('phone')
const loginInfo = reactive({
  info: {
    phone: '',
    password: '',
    authCode: '',
  },
})

const handleChangeLoginWay = (way: ILoginWay) => {
  loginWay.value = way
}

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
  background-color: #fff;
  &_block {
    width: 80%;
    height: 70vh;
    border-radius: 10px;
    margin-top: 10vh;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    padding: 30px 30px 30px;
    @include CenterHorVertical();
    flex-direction: column;
    &_main {
      width: 100%;
      height: 68%;
      padding: 40px 10px 20px;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 20px;
      justify-content: center;
      align-items: center;
      grid-gap: 10px;
      &_line {
        width: 100%;
        height: 100%;
        &_label {
          font-size: 14px;
          color: #999;
          padding: 10px 0;
        }
      }
    }
    &_bottom {
      width: 100%;
      height: 25%;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 5px;
    }
  }
}

:deep() {
  .custom-login {
    width: 100%;
  }
  .custom-authCode {
    margin-left: 5px;
  }
  .custom-login-phone {
    background: var(--theme-btn-primary-bg-color) !important;
  }
  .custom-login-weixin {
    background: #07c160 !important;
  }
}
</style>
