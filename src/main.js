import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/flatly/bootstrap.min.css'
import 'jquery'
import 'popper.js'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
