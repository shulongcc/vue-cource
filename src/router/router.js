import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    // 别名
    alias: '/home_page',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 动态路由匹配
  {
    path: '/argu/:name',
    component: () => import('@/views/argu.vue')
  },
  // 嵌套路由
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      // 只有父级的path 需要斜线
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  // 命名视图
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  // 重定向
  {
    path: '/main',
    // redirect: to => {
    //   console.log(to);
    //   return {
    //     name: 'Home'
    //   }
    // }
    redirect: to => '/'
  }
]
