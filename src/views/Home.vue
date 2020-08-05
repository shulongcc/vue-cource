<template>
  <div class="home">
    <b>{{food}}</b>
    <!-- <img alt="Vue logo" src="../assets//img/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">replace</button>
    <button @click="getInfo" :style="{backgroundColor:bgColor}">请求数据</button>
    <br>
    <img :src="url" alt="" srcset="">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios'
import { getUserInfo } from '@/api/user'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter (to, from, next) {
    // ...to 当前路由， from 上一个路由

    // console.log(to.name)
    // console.log(from.name)
    // next()

    // 获取this
    next(vm => {
      // console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    // ...页面即将离开时调用
    const leave = confirm('您确定要离开吗')
    if (leave) {
      next()
    } else next(false)
  },
  data () {
    return {
      url: '',
      bgColor: ''
    }
  },
  methods: {
    handleClick (type) {
      //  go  -1 后退一页 ， 1前进一页
      // this.$router.go(-1)
      // this.$router.back()

      if (type === 'back') {
        this.$router.back()
      } else if (type === 'push') {
        // this.$router.push('/parent')
        this.$router.push({
          name: 'parent',
          // query: {
          //   name: 'list'
          // },
          params: {
            name: 'lison'
          }
        })
      } else if (type === 'replace') {
        // 重置上一个页面
        this.$router.replace({
          name: 'parent'
        })
      }
    },
    getInfo () {
      // axios.post('/getUserInfo', { userId: 21 }).then(res => {
      //   console.log(res)
      // })
      getUserInfo({ userId: 21 }).then(res => {
        console.log(res)
        this.url = res.data.img2
        this.bgColor = res.data.color
      })
    }
  }
}
</script>
