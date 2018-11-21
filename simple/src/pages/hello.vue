<template>
  <div class="hello">
    <div v-for="item in [1,2,3,4,5,6,7,8,9,0]" style="padding:40px;" @click="goto">
      {{item}}
      </div>
  </div>
</template>

<script>
import image from 'assets/toutiao.png'
export default {
  name: 'hello',
  mounted() {
    console.log('mounted')
  },
  activated() {
    console.log('activated')
  },
  methods: {
    goto() {
      this.$router.push('test-keep-alive')
    }
  }
}
</script>

<style>

</style>
