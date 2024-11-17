<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '抽奖' },
}
</route>

<template>
  <view class="PrizeDraw">
    <div class="PrizeDraw_content">
      <div class="PrizeDraw_content_box"></div>
      <div class="PrizeDraw_content_line1">
        <div class="PrizeDraw_content_line1_btn">
          <p class="PrizeDraw_content_line1_btn_text">剩余宝箱</p>
          <h4 class="PrizeDraw_content_line1_btn_text" @click="openPopup">10元/个</h4>
        </div>
      </div>
      <div class="PrizeDraw_content_line2">
        <div class="PrizeDraw_content_line2_btn">
          <p class="PrizeDraw_content_line2_btn_text" @click="openPopup">购买一个</p>
        </div>
        <div class="PrizeDraw_content_line2_btn">
          <p class="PrizeDraw_content_line2_btn_text" @click="openPopup">购买十个</p>
        </div>
      </div>
      <div class="PrizeDraw_content_line3">
        <div class="PrizeDraw_content_line3_btn">
          <p class="PrizeDraw_content_line3_btn_text" @click="openPopup">已发入魂</p>
        </div>
        <div class="PrizeDraw_content_line3_btn">
          <p class="PrizeDraw_content_line3_btn_text" @click="openPopup">十连好运</p>
        </div>
      </div>
    </div>
  </view>
  <view>
    <wd-popup
      v-model="showPopup"
      custom-style="padding: 0px;background: transparent"
      @close="handleClose"
    >
      <l-dialer
        customStyle="width: 400px;height: 400px;overflow: hidden;"
        :prizeList="prizeList"
        @click="runDialer"
        @done="onDone"
        ref="dialer"
      />
    </wd-popup>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
defineOptions({
  name: 'PrizeDraw',
})
const showPopup = ref(false)
const dialer = ref(null)
const prizeList = ref([
  {
    id: 'coupon88',
    name: '8.8折',
    img: 'https://img11.360buyimg.com/pop/jfs/t1/175718/35/12595/5477/60b660c6Eb850717b/a1cfe750dcdb5b78.png',
  },
  {
    id: 'coupon900',
    Color: 'rgb(251, 219, 216)',
    name: '900',
    img: 'https://img11.360buyimg.com/pop/jfs/t1/190845/9/6092/4489/60b65fe8Ebb8f8284/955da889f6d1c13e.png',
  },
  {
    id: 'coupon1',
    name: '1元',
    img: 'https://img11.360buyimg.com/pop/jfs/t1/189927/14/6092/4174/60b66173E23c472ea/44af15a151defca1.png',
  },
  {
    id: 'apple',
    Color: 'rgba(246, 142, 46, 0.5)',
    name: '苹果手机',
    img: 'https://img11.360buyimg.com/pop/jfs/t1/177670/26/4591/2514/60a25874Ee0e5332a/99c7bdfede732ae4.png',
  },
  {
    id: 'coupon210',
    name: '210元',
    img: 'https://img11.360buyimg.com/pop/jfs/t1/124578/12/20170/4429/60b635d8E7089ebb0/7a47d76a2a260cc0.png',
  },
  {
    id: 'jd100',
    name: '100京豆',
    img: 'https://img11.360buyimg.com/pop/jfs/t1/162790/37/15087/28046/6062a49aE8f2c10f2/5591ff0ff38a45e2.png',
  },
  {
    id: 'coupon400',
    name: '400元',
    img: 'https://img11.360buyimg.com/pop/jfs/t1/177090/2/7001/4535/60b6607aEe9c1db2a/76c67675f547db3f.png',
  },
  {
    id: 'thanks',
    name: '谢谢参与',
    img: 'https://storage.jd.com/cdn-upload/dialTemplateHeart.png',
  },
])
const openPopup = () => {
  showPopup.value = true
}
const handleClose = () => {
  showPopup.value = false
}
const onDone = (index) => {
  console.log(index)
  const prize = prizeList.value[index]
  uni.showModal({
    title: prize.id === 'thanks' ? '很遗憾' : '恭喜您',
    content: (prize.id !== 'thanks' ? `获得` : '') + prize.name,
  })
}
const runDialer = () => {
  const num = Math.floor(Math.random() * prizeList.value.length) + 1
  // 奖品的索引
  dialer.value?.run(num)
}
</script>

<style lang="scss" scoped>
.PrizeDraw {
  height: 100vh;
  background-color: #c7e8ef;
  position: relative;
  &_content {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    &_box {
      width: 200px;
      height: 200px;
      border: 1px solid #ccc;
      background-color: #fff;
    }
    &_line1 {
      margin-top: 20px;
      &_btn {
        text-align: center;
        padding: 5px 20px;
        border: 1px solid #ccc;
        background-color: #fff;
        &_text {
          font-size: 16px;
          color: #000;
        }
      }
    }
    &_line2 {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
      &_btn {
        text-align: center;
        padding: 5px 20px;
        border: 1px solid #ccc;
        background-color: #fff;
        &_text {
          font-size: 16px;
          color: #000;
        }
      }
    }
    &_line3 {
      margin-top: 60px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 80px;
      &_btn {
        text-align: center;
        padding: 5px 20px;
        border: 1px solid #ccc;
        background-color: #fff;
        &_text {
          font-size: 16px;
          color: #000;
        }
      }
    }
  }
}
</style>
