import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import './assets/styles/base.css'
import './assets/styles/index.css'

import panel from './components/Panel.vue'

Vue.component('PanelG', panel)
new Vue({
  render: (h) => h(App),
}).$mount('#app')
