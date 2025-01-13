<template>
  <div class="PostsItem">
    <div class="PostsItem_header">
      <img class="PostsItem_header_avatar" :src="postsDetail.authorAvatar" alt="" />
      <div class="PostsItem_header_info">
        <div class="PostsItem_header_info_name">{{ postsDetail.author }}</div>
        <div class="PostsItem_header_info_time">{{ postsDetail.time }}</div>
      </div>
    </div>
    <div class="PostsItem_main">
      <h1 class="PostsItem_main_title">{{ postsDetail.title }}</h1>
      <p class="PostsItem_main_content">{{ postsDetail.content }}</p>
      <img class="PostsItem_main_image" v-if="postsDetail.image" :src="postsDetail.image" alt="" />
    </div>
    <div class="PostsItem_bottom">
      <div class="PostsItem_bottom_left">
        <div class="PostsItem_bottom_left_item">
          <img src="/static/image/likeIcon.png" />
          <span>{{ postsDetail.likes || 0 }}</span>
        </div>
        <div class="PostsItem_bottom_left_item">
          <img src="/static/image/commentIcon.png" />
          <span>{{ postsDetail.comments || 0 }}</span>
        </div>
      </div>
      <div class="PostsItem_bottom_right">
        <div class="PostsItem_bottom_right_item">
          <img src="/static/image/transmitIcon.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'PostsItem',
})
const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {
        id: '',
        author: '',
        authorAvatar: '',
        time: '',
        title: '',
        content: '',
        likes: '',
        comments: '',
      }
    },
  },
})
const postsDetail = computed(() => {
  return props.data
})
</script>

<style scoped lang="scss">
.PostsItem {
  padding: 12px;
  border-radius: 7px;
  opacity: 1;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), #ffffff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  &_header {
    display: flex;
    &_avatar {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
    &_info {
      margin-left: 10px;
      &_name {
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0px;
        color: #000000;
      }
      &_time {
        font-family: Roboto;
        font-size: 10.5px;
        font-weight: normal;
        line-height: 14px;
        letter-spacing: 0px;
        color: #6b7280;
      }
    }
  }
  &_main {
    margin-top: 7px;
    &_title {
      font-size: 15.75px;
      font-weight: bold;
      line-height: 24.5px;
      letter-spacing: 0px;
      color: #000000;
    }
    &_content {
      font-size: 14px;
      font-weight: normal;
      line-height: 21px;
      letter-spacing: 0px;
      color: #727376;
    }
    &_image {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      border-radius: 7px;
    }
  }
  &_bottom {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    &_left {
      display: flex;
      &_item {
        display: flex;
        align-items: center;
        margin-right: 10px;
        img {
          width: 12px;
          height: 12px;
          margin-right: 3px;
        }
        span {
          font-size: 12px;
          font-weight: normal;
          line-height: 18px;
          letter-spacing: 0px;
        }
      }
    }
    &_right {
      img {
        width: 14px;
        height: 14px;
      }
    }
  }
}
</style>
