import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import HelvellynVue from './plugins/helvellyn-vue'

import './plugins/infiniteScroll'
import './plugins/filters'

Vue.config.productionTip = false

Vue.use(
  HelvellynVue,
  {
    onAuth: function () {
      store.dispatch('graph/init')
      store.dispatch('local/sync')
    }
  }
)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
