import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/icon/iconfont.css'
import api from './assets/commen/api'
import BaiduMap from 'vue-baidu-map'
Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(BaiduMap, {
  ak: 'W0eGESGFYkBo9qhMkGMofjbr0eIyGdmR'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
