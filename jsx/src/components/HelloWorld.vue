<template>
  <div class="hello">
    <jsx-demo>
      <div>111</div>
    </jsx-demo>
  </div>
</template>

<script>
  import Vue from 'vue'
  Vue.component('jsx-demo', {
  render: function (createElement) {
    return createElement('div',this.$slots.default)
  },
//props: {
//  level: {
//    type: Number,
//    required: true
//  }
//}
})
  
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
