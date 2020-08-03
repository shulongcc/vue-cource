<template>
  <div>
    <!-- {{ $route.params.name }} -->
    {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: [String, Number],
      default: '默认'
    }
  },
  beforeUpdate (to, from, next) {
    // 组件被复用时调用
    console.log(to.name, from.name)
  }
}
</script>

<style scoped lang="scss">

</style>
