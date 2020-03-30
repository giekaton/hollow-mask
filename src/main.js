import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import saveSvgAsPng from 'save-svg-as-png';
import router from './router'
Object.defineProperty(Vue.prototype, 'saveSvgAsPng', { value: saveSvgAsPng });


router.beforeEach((to, from, next) => {
  // console.log(to);
  if (to.name == 'mask') {
    document.title = 'Hollow Mask ID: ' + to.params.maskId;
    next();
  }
  else {
    document.title = to.meta.title;
    next();
  }
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
