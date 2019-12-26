import Vue from 'vue';
import vuetify from './utils/vuetify';
import i18n from './utils/i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/request.helper';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
