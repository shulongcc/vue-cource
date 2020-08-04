<template>
  <div class="container">
    Iam email
    <button @click="handleClick">按我</button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
      // this.$emit('on-click', 'hello')
    }
  },
  mounted () {
    // console.log(this.$bus)
    this.$on('on-click', mes => {
      console.log(mes)
    })
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.container {
  border: 1px solid blue;
}
</style>
