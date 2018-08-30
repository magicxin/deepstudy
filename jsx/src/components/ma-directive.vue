<template>
  <div class="ma-directive">
    <div>11</div>
  </div>
</template>

<script>
  import recursion from "./recursion.js"
  export default {
    data() {
      return {
      dept: [
                  {name:'总经理办公室',dept:1,parentId:10001,checked:false,id:1},
                  {name:'秘书部',dept:10,parentId:1,checked:false,id:2},
                  {name:'业务部',dept:3,parentId:10001,checked:false,id:3},
                  {name:'运营管理部',dept:4,parentId:10001,checked:false,id:4},
                  {name:'工程技术部',dept:5,parentId:10001,checked:false,id:5},
                  {name:'政务研发部',dept:6,parentId:10001,checked:false,id:6},
                  {name:'产品一部',dept:11,parentId:6,checked:false,id:7},
                  {name:'UI/前端组',dept:112,parentId:12,checked:false,id:8},
                  {name:'产品二部',dept:12,parentId:6,checked:false,id:9},
                  {name:'产品三部',dept:13,parentId:6,checked:false,id:10},
                  {name:'工程二组',dept:14,parentId:5,checked:false,id:11},
                  {name:'三部一组',dept:113,parentId:13,checked:false,id:12},
                  {name:'三部二组',dept:114,parentId:13,checked:false,id:13},
                  {name:'一部一组',dept:15,parentId:5,checked:false,id:14},
                  {name:'运营一部',dept:16,parentId:4,checked:false,id:15},
                  {name:'运营二部',dept:17,parentId:4,checked:false,id:16},
                  {name:'业务一部',dept:18,parentId:3,checked:false,id:17},
                  {name:'业务二部',dept:19,parentId:3,checked:false,id:18},
                  {name:'项目一组',dept:20,parentId:6,checked:false,id:19},
                  {name:'UI/前端组',dept:115,parentId:20,checked:false,id:20},
                  {name:'项目二组',dept:116,parentId:6,checked:false,id:21},
                  {name:'工程一组',dept:21,parentId:5,checked:false,id:22},
                  
                  {name:'张三',person:1,parentId:1,checked:false,id:23},
                  {name:'张思',person:2,parentId:10,checked:false,id:24},
                  {name:'张武',person:3,parentId:10,checked:false,id:25},
                  {name:'张柳',person:4,parentId:12,checked:false,id:26},
                  {name:'王一',person:5,parentId:115,checked:false,id:27},
                  {name:'王二',person:6,parentId:116,checked:false,id:28},
                  {name:'网三',person:7,parentId:113,checked:false,id:29},
                  {name:'王寺',person:8,parentId:113,checked:false,id:30},
                  {name:'王五',person:9,parentId:4,checked:false,id:31},
                  {name:'王柳',person:10,parentId:3,checked:false,id:32},
                  {name:'程三',person:11,parentId:4,checked:false,id:33},
                  {name:'程四',person:12,parentId:3,checked:false,id:34},
                  {name:'程五',person:13,parentId:113,checked:false,id:35},
                  {name:'马一',person:14,parentId:116,checked:false,id:36},
                  {name:'郑武',person:15,parentId:112,checked:false,id:37},
                  {name:'陆叁',person:16,parentId:112,checked:false,id:38},
                  {name:'冯晓',person:17,parentId:112,checked:false,id:39},
                  {name:'姚深',person:18,parentId:1,checked:false,id:40},
                  {name:'杨茂',person:19,parentId:5,checked:false,id:41},
                  {name:'陆晓峰',person:20,parentId:5,checked:false,id:421}
                ]
      }
    },
    created() {
      let arr = []
      recursion.getChildById(6,recursion.sortById(this.dept),arr)
      console.log(arr)
    },
    methods: {
      
    }
  }
</script>

<style>
</style>