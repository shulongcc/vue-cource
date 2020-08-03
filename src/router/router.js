import Home from '@/views/Home.vue'

export default [
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
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    // 对象模式动态传值
    props: {
      food: 'banana'
    }
  },
  // 动态路由匹配
  {
    path: '/argu/:name',
    component: () => import('@/views/argu.vue'),
    // 动态传值
    props: true
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
