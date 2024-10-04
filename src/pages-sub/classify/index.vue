<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '商品分类',
  },
}
</route>
<template>
  <view class="wraper">
    <wd-sidebar v-model="activeId" @change="handleChange">
      <wd-sidebar-item
        v-for="(item, index) in categories"
        :key="index"
        :value="item.sort"
        :label="item.title"
      />
    </wd-sidebar>
    <scroll-view
      class="content"
      scroll-y
      scroll-with-animation
      :scroll-top="scrollTop"
      :throttle="false"
    ></scroll-view>
  </view>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { getRect, isArray } from 'wot-design-uni/components/common/util'
import { getNavigateOptions } from '@/utils/index'

const activeId = ref<number>(1)
const scrollTop = ref<number>(0)
const itemScrollTop = ref<number[]>([])

const subCategories = new Array(24).fill({ title: '标题文字', label: '这是描述这是描述' }, 0, 24)
const categories = ref([])

onMounted(() => {
  const options: any = getCurrentInstance()
  activeId.value = +getNavigateOptions(options, 'activeId') || 1
  import('@/constants/mock/menu.json').then((res: any) => {
    categories.value = res.default.data
  })
})

function handleChange({ value }) {
  console.log(value)
  activeId.value = value
}
</script>

<style scoped lang="scss">
.wraper {
  display: flex;
  height: calc(100vh - var(--window-top));
  height: calc(100vh - var(--window-top) - constant(safe-area-inset-bottom));
  height: calc(100vh - var(--window-top) - env(safe-area-inset-bottom));
}

.content {
  flex: 1;
  background: #fff;
}
</style>
