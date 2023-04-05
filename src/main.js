import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import Header from './Components/Header.vue'
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'
library.add(faPhone)
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  render: h => h(App)
}).$mount('#app')

Vue({
  el: '#app',
  components: {
    Header
  }
})

Vue({
  vuetify: new Vuetify(),
  el: '#app',
  render: h => h(App)
})
Vue.use(Vuetify)
