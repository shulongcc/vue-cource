<template>
  <div class="container">
    <count-to :end-val="100"></count-to>
  </div>
</template>

<script>
import CountTo from '_c/count-to'
export default {
  name: 'count_to',
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    CountTo
  }
}
</script>

<style scoped lang="scss">

</style>
