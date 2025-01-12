<template>
  <wd-config-provider :themeVars="themeVars">
    <slot />
    <wd-toast />
    <wd-message-box />
  </wd-config-provider>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store'
import type { ConfigProviderThemeVars } from 'wot-design-uni'

const userStore = useUserStore()
onMounted(() => {
  // 如果未登录，跳转到登录页
  if (!userStore.isLogined) {
    uni.showToast({
      icon: 'none',
      title: '请登录',
    })
    setTimeout(() => {
      uni.reLaunch({
        url: '/pages/login/index',
      })
    }, 1000)
  }
})

const themeVars: ConfigProviderThemeVars = {
  // colorTheme: 'red',
  // buttonPrimaryBgColor: '#07c160',
  // buttonPrimaryColor: '#07c160',
}
</script>
