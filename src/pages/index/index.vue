<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <div class="home">
    <div class="home_activity"></div>
  </div>
</template>

<script lang="ts" setup>
import PLATFORM from '@/utils/platform'

defineOptions({
  name: 'Home',
})
</script>

<style scoped lang="scss">
.home {
  padding: 16px;
  &_activity {
    width: 100%;
    height: 200px;
    background-color: #ccc;
  }
}
</style>
