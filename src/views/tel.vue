<template>
  <div class="container">
    I am tel
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      this.message = mes
    })
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.container{
  border: 1px solid red;
}
</style>
