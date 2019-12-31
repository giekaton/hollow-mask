import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import saveSvgAsPng from 'save-svg-as-png';
import router from './router'
Object.defineProperty(Vue.prototype, 'saveSvgAsPng', { value: saveSvgAsPng });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
