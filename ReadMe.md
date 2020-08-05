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
router.beforeEach((to,from, next)=> {})
to： 即将跳转到的页面
from： 函数
next： 跳转到谁

在路由跳转前触发，也就是路由还没跳转前告知  以免跳转后再通知为时已晚；主要用于登录验证；

2.全局解析守卫
router.beforeResolve((to,from, next)=> {})

在路由跳转前触发，与beforeEach 不同的是在  beforeEach 和 组件内 beforeRouteEnter之后， afterEach之前

3.全局后置守卫
route.afterEach((to,from) => {})
跳转后的钩子,无法阻止跳转

4.路由独享守卫
beforeEnter: (to, from, next) => {}

5.组件内 
beforeRouteEnter (to, from, next) => {}
在渲染该组件德对应路由被 confirm 前调用
不能获取组件实例 this， 因为当前守卫执行前，组件实例还没被创建，但可以通过 es6 vm 箭头函数获取
beforeRouteEnter: (to, from, next) {
  next(vm => {})
}

beforeRouteUpdate (to, from, next) {}
在当前路由改变，但是该组件被复用是调用；例/argu/1, /argu/2, 时调用 

beforeRouteLeave (to, from, next) {}
导航离开该组件时对应路由时调用，例：home.vue

注： 
1. 但凡存在next参数的钩子，必须调用next() 才能执行跳转
2. 如果要中断当前的导航要调用next(false) 如果浏览器的URL改变了（可能是用户手动输入地址或点击了后退按钮），那么URL 地址会重置到from 路由对应的地址（主要用于用户登录验证不通过处理）
3. next('/') 或着 next({path: '/'}) 跳转到一个地址。
4. 在beforeRouteEnter 钩子中 next(vm => {})内接收的回调参数为当前组件的示例VM，这个回调函数在生命周期mounted之后调用，也就是， 他是所有导航守卫和生命周期函数最后执行的钩子
5. next(error) ： 如果传入 next的参数是一个 error 实例，则导航会被终止且该错误会被传递给 router.onError 注册过的回调

beforeRouteLeave -> beforeEach -> beforeEnter -> beforeRouteEnter -> beforeResolve -> afterEach -> beforeCreate -> created -> beforeMount -> mounted -> beforeRouteUpdate


状态管理
1. 项目简单用Bus
  lib/bus.js email.vue && tel.vue
2. VUX
  vue compontents => Actions => Mutations => state =>  vue compontents

Mutations 中只能进行同步操作
若需要进行异步操作（请求接口获取值，根据值修改state，需要使用Actions）

跨域
http:// www.d.com/d.js
http:// www.d.com/2.js
同一域名下 允许通信

http:// www.d.com/lib/d.js
http:// www.d.com/api/2.js
同一域名不同文件夹下  允许通信

http:// www.d.com:3333/d.js
http:// www.d.com:8080/2.js
同一域名不同端口  不允许通信

http:// www.d.com/2.js
http:// 46.33.22.44/1.js
域名和ip地址对应  不允许通信

http:// www.d.com/1.js
http:// scipt.d.com/2.js
主域相同，子域不同  不允许通信

http:// www.d.com/1.js
http:// d.com/2.js
同一域名，不同二级域名 不允许通信

http:// www.d.com/1.js
http:// www.e.com/b.js
不同域名  不允许通信
