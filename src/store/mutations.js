import vue from 'vue'

const mutations = {
  // params 可以是对象
  SET_APPNAME (state, params) {
    state.appName = params
  },
  SET_APPVERSION (state) {
    // state.appVersion = 'v4.0'
    // 在state中未定义的参数，修改后无法触发视图层更新
    vue.set(state, 'appVersion', 'v4.0')
  }
}

export default mutations
