<template>
  <div class="goodsItem">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps({
  children: {
    type: Object,
    default: () => ({}),
  },
})

defineOptions({
  name: 'GoodsItem',
})
</script>

<style scoped lang="scss">
.goodsItem {
  @include CenterHorVertical();
  width: 100%;
  height: 300px;
  background-color: #ccc;
}
</style>
