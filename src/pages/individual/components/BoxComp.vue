<template>
  <view class="boxComp"></view>
  <view>
    <ul class="boxInfo">
      <li class="boxInfo_item">
        <p>商品</p>
        <h6>0</h6>
      </li>
      <li class="boxInfo_item">
        <p>盲盒</p>
        <h6>0</h6>
      </li>
    </ul>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'BoxComp',
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
    p {
      font-size: 16px;
      font-weight: bolder;
    }
    h6 {
      font-size: 16px;
    }
  }
  li:nth-of-type(1) {
    position: relative;
  }
  li:nth-of-type(1)::before {
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
