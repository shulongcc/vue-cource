vue.config.js中
在vue-cli.3.3版本后 baseUrl被废除了，因此这边要写成 publicPath

Error: Cannot find module 'node-sass'问题
cnpm install node-sass

ERROR Failed to compile with 1 errors
检查资源引用路径

<!-- 路由组件传参 -->
1.基本传参
router.js
{
  path: '/argu/:name',
  component: () => import('@/views/argu.vue'),
  // 配置
  props: true
}
argu.vue 中
props: {
  name: {
    type: [String, Number],
    default: '默认'
  }
}

2.对象传参
 {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    // 对象模式动态传值
    props: {
      food: 'banana'
    }
  },
