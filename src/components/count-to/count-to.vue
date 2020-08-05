<template>
  <div>
    <span :class="countClass" :id="eleId"></span>
  </div>
</template>
<script>
import CountUp from 'countup'
export default {
  name: 'CountTo',
  computed: {
    eleId () {
      return `count_up${this._uid}`
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true,
      default: 10
    },
    /**
     * 表示保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * 渐变时长
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * 动画延时
     */
    delay: {
      type: Number,
      default: 1
    },
    /**
     * 是否使用变速
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * 是否使用分组
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * 分组符号
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * 整数和小数分割符号
     */
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      counter: {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
      setTimeout(() => {
        this.counter.start()
      }, this.delay)
    })
  }
}
</script>
