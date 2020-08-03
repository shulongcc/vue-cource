import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)
const router = new VueRouter({
  // 模式,开发时有#
  mode: 'hash',
  // mode: 'history',
  routes
})

const HAS_LOGINED = true
// 跳转之前处理
router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'Home' })
    else next()
  }
})

// router.beforeResolve

// 跳转后的钩子,无法阻止跳转
router.afterEach((to, from) => {
  // logining = false
  // 将跳转动画置为false
})

export default router

/**
 * 1.导航触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3.调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5.调用路由独享的守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件（即将进入的页面组件）里调用beforeRouterEnter
 * 8.调用全局的解析守卫 beforeResolve
 * 9.导航被确认
 * 10. 调用全局的后置守卫 afterEacch
 * 11. 触发DOM 更新
 * 12. 用创建好的实列调用beforeRouterEnter 守卫传给next 的回调函数
 */
