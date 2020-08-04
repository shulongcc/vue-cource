const state = {
  userName: 'cc'
}
const getters = {
  firstLeeter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  updateUserName ({ commit, state, rootState, dispatch }) {
    // rootState 根state
    // state 当前state
    dispatch('xxx', '')
  },
  xxx () {

  }
}

export default {
  // 使用命名空间
  // namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    //
  }
}
