import { getAppName } from '@/api/app'
const actions = {
  // updateAppName ({ commit }) {
  //   getAppName().then(res => {
  //     console.log(res)
  //     const { code, info: { appName } } = res
  //     if (code === 200) {
  //       commit('SET_APPNAME', appName)
  //     }
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  async updateAppName ({ commit }) {
    try {
      // const { info: { appName } } = await getAppName()
      // commit('SET_APPNAME', appName)
      const res = await getAppName()
      commit('SET_APPNAME', res.info.appName)
    } catch (error) {
      console.log(error)
    }
  }
}

export default actions
