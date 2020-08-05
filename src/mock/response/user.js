import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
  // console.log(options)
  // return {
  //   name: 'cc'
  // }
  const template = {
    'str|2-4': 'vuecc',
    'name|5': 'vue',
    'age|+2': 18,
    'num|4-10': 0,
    'float|3-10.2-4': 0,
    'bool|1': true,
    'bool2|1-9': true, // min/(min+max)
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'obj2|1-2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|2-4': [1, 2, 3],
    'arr2|2': ['a', 'b'],
    func: () => {
      return 'this is a function'
    },
    reg: /[1-9][a-z]/,
    email: Random.email(),
    email2: Mock.mock('@email'),
    range: Random.range(3, 10, 2),
    date: Random.date('yyyy-MM-dd'),
    time: Random.time('HH:mm:ss'),
    time1: Random.datetime('yyyy-MM-dd HH:mm:ss'),
    now: Random.now('hour', 'yyyy-MM-dd HH:mm:ss'),
    img: Random.image('100x50', '#00f00', '#fff', 'png', 'cc'),
    img2: Random.dataImage(),
    color: Random.color(),
    cword: Random.cword('挖掘机噶噶感觉', 2, 5),
    cname: Random.cname(),
    region: Random.region(),
    province: Random.province(),
    city: Random.city(true),
    conunty: Random.county(true),
    zip: Random.zip(),
    upLeeter: Random.capitalize(),
    pick: Random.pick([1, 2, 3, 4]),
    shuffle: Random.shuffle([1, 2, 3, 4]),
    guid: Random.guid(),
    // 扩展
    fruit: Random.fruit(),
    fruit1: '@fruit1'
  }
  // let i = 3
  // const arr = []
  // while (i--) {
  //   arr.push(template)
  // }
  // return Mock.mock(arr)
  return Mock.mock(template)
}
