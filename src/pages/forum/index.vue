<route lang="json5">
{
  style: {
    navigationBarTitleText: '社区',
    backgroundColor: '#f9fafb',
  },
  needLogin: true,
}
</route>
<template>
  <div class="forum">
    <div class="forum_header">
      <wd-search placeholder="搜索帖子、用户或话题" cancel-txt="搜索" />
    </div>
    <div class="forum_typeLine">
      <div
        :class="['forum_typeLine_item', { 'forum_typeLine_item-active': categoryType === item.id }]"
        @click="selectType(item.id)"
        v-for="item in categories"
        :key="item.id"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="forum_posts">
      <div v-for="(item, idx) in posts" :key="idx">
        <PostsItem :data="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { categoryList, postsList } from './mock'
import PostsItem from './components/PostsItem.vue'
defineOptions({
  name: 'ForumPage',
})
const categories = ref(categoryList)
const posts = ref(postsList)
const categoryType = ref(1)

const selectType = (id: number) => {
  categoryType.value = id
}
</script>

<style scoped lang="scss">
/* #ifdef H5 */ //这里是H5中的写法
page {
  background-color: #f9fafb;
}
/* #endif */
.forum {
  &_header {
    border-bottom: 1px solid #f2f2f2;
  }
  &_typeLine {
    padding: 10px 0;
    background: #fff;
    display: flex;
    &_item {
      display: flex;
      flex-direction: column;
      padding: 3.5px 14px;
      border-radius: 9999px;
      opacity: 1;
      background: #f3f4f6;
      margin-left: 14px;
      font-family: Roboto;
      font-size: 13px;
      letter-spacing: 0px;
      color: #000000;
      &-active {
        background: #dbeafe;
      }
    }
  }
  &_posts {
    padding: 14px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>
