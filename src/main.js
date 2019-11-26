import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import * as shadow from 'vue-shadow-dom'

Vue.config.productionTip = false
Vue.use(BootstrapVue);

Vue.use(shadow)

new Vue({
  render: h => h(App),
}).$mount('#app')
