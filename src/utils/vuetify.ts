import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@/assets/style/desktop.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);
export default new Vuetify({
  customProperties: true,
  icons: {
    iconfont: 'mdi' || 'md' || 'fa' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  }
});
