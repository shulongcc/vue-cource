import Mock from 'mockjs'
import { getUserInfo } from './response/user'

// 返回数据
// Mock.mock('http://localhost:3000/getUserInfo', getUserInfo)
Mock.mock(/\/getUserInfo/, getUserInfo)
// Mock.mock(/\/getUserInfo/, { name: 'cc' })

// 延时
Mock.setup({
  timeout: 500
})

const Random = Mock.Random

Random.extend({
  fruit () {
    const fruit = ['apple', 'bannana', 'peach', 'lenmon']
    return this.pick(fruit)
  }
})

export default Mock
