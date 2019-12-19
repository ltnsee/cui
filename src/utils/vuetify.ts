import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@/assets/style/desktop.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Vuetify);
export default new Vuetify({
  customProperties: true,
  icons: {
    iconfont: 'md' || 'fa' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  }
});
