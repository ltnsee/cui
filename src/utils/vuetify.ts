import Vue from 'vue';
import Vuetify from 'vuetify';
import '@/assets/style/desktop.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default new Vuetify({
  customProperties: true,
  icons: {
    iconfont: 'md' || 'fa' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  }
});
Vue.use(Vuetify);
