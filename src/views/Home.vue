<template>
  <div class="home">
    <b>{{food}}</b>
    <img alt="Vue logo" src="../assets//img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">replace</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

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
    }
  }
}
</script>
