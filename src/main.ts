import Vue from 'vue';
import vuetify from './utils/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/request.helper';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
