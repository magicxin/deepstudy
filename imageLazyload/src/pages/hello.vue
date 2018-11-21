<template>
  <div class="hello">
<!--
    <lazy-load :source="source"></lazy-load>
    <lazy-load :source="source"></lazy-load>
    <lazy-load :source="source"></lazy-load>
    <lazy-load :source="source"></lazy-load>
    <lazy-load :source="source"></lazy-load>
    <lazy-load :source="source"></lazy-load>
    <lazy-load :source="source"></lazy-load>
    <lazy-load :source="empty"></lazy-load>
-->
    <img :src="source" v-lazyload/>
    <img :src="source" v-lazyload/>
    <img :src="source" v-lazyload/>
    <img :src="source" v-lazyload/>
    <img :src="empty" v-lazyload/>
  </div>
</template>

<script>
//  import imageItem from '../components/lazy-load'
  import image from 'assets/toutiao.png'
  import empty from 'assets/empty.png'

  export default {
    name: 'hello',
//    components: {
//      imageItem
//    },
    data() {
      return {
        source: image,
        empty: empty
      }
    },
    created() {
      console.log(this.children)
    }
  }

</script>

<style>
.loader {
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;
}
/*
  Set the color of the icon
*/
svg path,
svg rect {
  fill: #FF6700;
}
</style>
