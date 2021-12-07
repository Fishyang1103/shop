import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 Sweetalert
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// 引入 font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// {內加入想要的icon，記得駝峰式命名}
import { faShoppingCart, faShoppingBag, faInfoCircle, faCartArrowDown, faTimes, faFireAlt } from '@fortawesome/free-solid-svg-icons'

Vue.use(VueSweetalert2)
library.add(faShoppingCart, faShoppingBag, faInfoCircle, faCartArrowDown, faTimes, faFireAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
