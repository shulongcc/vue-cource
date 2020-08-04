const getters = {
//  基于state中appName 来计算
  appNameWithVersion: (state) => {
    return `${state.appName}v2.0`
  }
}
export default getters
