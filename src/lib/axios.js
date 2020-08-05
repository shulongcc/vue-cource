import axios from 'axios'
import { baseURL } from '@/config'
class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    // 把请求压入队列，队列中没有请求的话，停止loading
    this.quequ = {}
  }

  // 内部配置
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      headers: {

      }
    }
    return config
  }

  // 拦截
  interceptors (instance, url) {
    // 请求
    instance.interceptors.request.use(config => {
      // 添加全局的loading
      // Spin.show() // 创建一个loading，
      if (!Object.keys(this.quequ).length) {
        // Spin.show()
      }
      this.quequ[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应
    instance.interceptors.response.use(res => {
      // console.log(res)
      delete this.quequ[url]
      const { data } = res
      // const { data, status } = res
      // return { data, status }
      return { data }
    }, error => {
      delete this.quequ[url]
      return Promise.reject(error)
    })
  }

  // 请求调用
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
