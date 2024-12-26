import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'zzpPro',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  // 自动注册机制
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    color: '#2c2c2c',
    selectedColor: '#2c2c2c',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    height: '50px',
    fontSize: '10px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      {
        iconPath: 'static/tabbar/shouye.png',
        selectedIconPath: 'static/tabbar/shouyeAct.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'static/tabbar/forum.png',
        selectedIconPath: 'static/tabbar/forumAct.png',
        pagePath: 'pages/forum/index',
        text: '论坛',
      },
      {
        iconPath: 'static/tabbar/prizeDraw.png',
        selectedIconPath: 'static/tabbar/prizeDrawAct.png',
        pagePath: 'pages/prizeDraw/index',
        text: '抽奖',
      },
      {
        iconPath: 'static/tabbar/ShoppingCar.png',
        selectedIconPath: 'static/tabbar/ShoppingCarAct.png',
        pagePath: 'pages/shoppingCar/index',
        text: '购物车',
      },
      {
        iconPath: 'static/tabbar/wode.png',
        selectedIconPath: 'static/tabbar/wodeAct.png',
        pagePath: 'pages/individual/index',
        text: '我的',
      },
    ],
  },
  pages: [
    {
      path: 'pages/index/index',
      type: 'home',
    },
    {
      path: 'pages/forum/index',
      type: 'page',
    },
    {
      path: 'pages/individual/index',
      type: 'page',
    },
    {
      path: 'pages/prizeDraw/index',
      type: 'page',
    },
    {
      path: 'pages/shoppingCar/index',
      type: 'page',
    },
  ],
  subPackages: [],
})
