import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/hello'
import testKeepAlive from '../pages/test-keep-alive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld,
      meta: {
        keepAlive:true
      }
    },
    {
      path: '/test-keep-alive',
      name: 'test-keep-alive',
      component: testKeepAlive,
      meta: {
        keepAlive:false
      }
    }
  ]
})
