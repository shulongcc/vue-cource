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
}

3. 函数式传值
{
  path: '/',
  // 别名
  alias: '/home_page',
  name: 'Home',
  component: Home,
  // 函数模式传值
  props: route => ({
    food: route.query.food
  })
}

路由mode
默认hash， 带#
默认匹配规则从上到下，需要设置404页面
history 模式， 不带#

路由导航守卫
判断是否登录，或者是否有权限

1.全局守卫
router.beforeEach（（to,from, next）=> {}）
to： 即将跳转到的页面
from： 函数
next： 跳转到谁
2.后置钩子
