<template>
  <div class="container">
    <!-- <a-Input v-model="inputValue" /> -->
    <a-Input @input="handleInput" />
    <p>{{inputValue}} -> LastLetter is {{inputValueLastLetter}}</p>
    <a-show :content="inputValue" />
    <p>appName: {{appName}}; appNameWithVersion: {{appNameWithVersion}}</p>
    <P>userName: {{userName}}; firstLeeter is {{firstLeeter}}</P>
    <button @click="handleChangeAppName">修改appName</button>
    <!-- <p>appVersion: {{appVersion}}</p> -->
    <button @click="changeUserName">修改用户名</button>
    <br>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList"  :key="index">{{li}}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, createNamespacedHelpers, mapMutations, mapActions } from 'vuex'
// 开启命名空间 namespaced: true, 方式一
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')

export default {
  name: 'store',
  components: {
    AInput, AShow
  },
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    // 以数组的形式
    // ...mapState([
    //   'appName'
    // ]),
    ...mapGetters([
      'appNameWithVersion',
      'firstLeeter'
    ]),
    // ...mapGetters('user', [
    //   'firstLeeter'
    // ]),
    // 以对象的形式， 未开启命名空间
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userNamem,
      // todoList: state => state.todo ? state.todo.todoList : []
      todoList: state => state.user.todo ? state.user.todo.todoList : []
    }),

    // 开启命名空间 namespaced: true, 方式一
    // ...mapState({
    //   userName: state => state.userName,
    //   appVersion: state => state.appVersion
    // }),
    // 方式二
    // ...mapState('user', {
    //   userName: state => state.userName
    // }),

    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    appName () {
      return this.$store.state.appName
    },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    ...mapMutations([
      'SET_USER_NAME',
      'SET_APPNAME'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (val) {
      this.inputValue = val
    },
    handleChangeAppName () {
      //  Computed property "appName" was assigned to but it has no setter.
      // this.appName = 'newAppName'
      // this.$store.commit('SET_APPNAME', 'newAPPName')
      // this.$store.commit('SET_APPNAME', {
      //   appName: 'newAPPName'
      // })
      // this.$store.commit({
      //   type: 'SET_APPNAME',
      //   appName: 'newAPPName'
      // })
      // this.SET_APPNAME({ appName: 'newAPPName' })
      // this.$store.commit('SET_APPVERSION')
      this.updateAppName()
    },
    changeUserName () {
      // this.SET_USER_NAME('vue-cc')
      this.$store.dispatch('updateAppName', 'vue-cc')
    },
    // 动态添加模块
    // registerModule () {
    //   this.$store.registerModule('todo', {
    //     state: {
    //       todoList: [
    //         '学习mutations', '学习actions'
    //       ]
    //     }
    //   })
    // }
    // 动态给模块添加模块
    registerModule () {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习mutations', '学习actions'
          ]
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
