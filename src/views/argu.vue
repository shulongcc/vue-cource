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
  }
}
</script>

<style scoped lang="scss">

</style>
