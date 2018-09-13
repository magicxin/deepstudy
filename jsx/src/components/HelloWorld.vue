<template>
  <div class="hello">
    <jsx-demo>
      <div class="content">
       <img v-lazy="logo"/>
      </div>
    </jsx-demo>
  </div>
</template>

<script>
  import Vue from 'vue'
  import logo from '../assets/logo.png'
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
import test from './test' 
export default {
  name: 'HelloWorld',
  data() {
    return {
      logo
    }
  },
  props: {
    msg: String
  },
  created() {
    test()
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
.content {
  width:60px;
  text-align: center;
  background:#ececec;
}
img {
  width:100%;
}
img[lazy=loading] {
  width:20px;
  height:60px;
}
</style>
