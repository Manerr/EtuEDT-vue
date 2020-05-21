import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueClipboard from 'vue-clipboard2'
import isMobile from './plugins/isMobile.js'

Vue.prototype.$isMobile = isMobile

Vue.use(VueClipboard);

Vue.config.productionTip = false

const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.';
Vue.config.warnHandler = function (msg) {
  if (msg === ignoreWarnMessage)
    msg = null;
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')