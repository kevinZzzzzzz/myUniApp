<template>
  <view class="boxComp"></view>
  <view>
    <ul class="boxInfo">
      <li class="boxInfo_item">
        <h3 class="boxInfo_item_title">商品</h3>
        <h6 class="boxInfo_item_ctx">{{ boxInfo.data.goods }}</h6>
      </li>
      <li class="boxInfo_item">
        <h3 class="boxInfo_item_title">盲盒</h3>
        <h6 class="boxInfo_item_ctx">{{ boxInfo.data.box }}</h6>
      </li>
    </ul>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'BoxComp',
})
const boxInfo = reactive({
  data: {
    goods: 0,
    box: 0,
  },
})
</script>

<style scoped lang="scss">
.boxComp {
  width: 100%;
  height: 100px;
  background-color: #00fff5;
  border-radius: 5px;
}
.boxInfo {
  height: 100px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  &_item {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    &_title {
      font-size: 18px;
      font-weight: bolder;
      margin-bottom: 5px;
    }
    &_ctx {
      font-size: 16px;
      font-weight: bolder;
    }
  }
  &_item:nth-of-type(1) {
    position: relative;
  }
  &_item:nth-of-type(1)::before {
    content: '';
    width: 2px;
    height: 40px;
    background-color: #ccc;
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
