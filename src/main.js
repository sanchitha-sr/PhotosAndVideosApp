import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { store } from './store/store'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'





Vue.use(ElementUI);




Vue.config.productionTip = false

new Vue({
  store: store,
  router,
  // @ts-ignore
  render: h => h(App)
}).$mount('#app')
