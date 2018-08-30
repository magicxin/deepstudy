import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import maDirective from 'components/ma-directive'
import hello from 'components/HelloWorld'
export default new Router({
    routes: [{
            path: '/directive',
            name: 'directive',
            component: maDirective
      },{
            path: '/hello',
            name: 'hello',
            component: hello
      },
    ]
})