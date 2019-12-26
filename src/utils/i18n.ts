import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zhMessages from './locale/zh.messages';
import enMessages from './locale/en.messages';
import store from '@/store';

Vue.use(VueI18n);

export default new VueI18n({
  locale: store.state.locale,
  messages: {
    zh: zhMessages,
    en: enMessages
  }
});
