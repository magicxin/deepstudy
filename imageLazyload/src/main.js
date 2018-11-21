import Vue from 'vue'
import App from './App'
import router from './router'
import 'css/reset.css'
import 'css/font/fontface.css'
//import lazyload from 'utils/directives'
import lazyload from 'components/image'
Vue.config.productionTip = false
console.log(lazyload)
Vue.use(lazyload)
//Vue.directive("lazyload", lazyload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
