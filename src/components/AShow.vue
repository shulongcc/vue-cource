<template>
  <div class="container">
    <p>Ashow:  {{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
