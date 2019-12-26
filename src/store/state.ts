import { IState, ILocaleItems } from './interface';
import user from './modules/user';
import menu from './menu';

const state: IState = {
  author: '陈小生',
  menu: menu,
  localeItems: [
    { lang: '中文', locale: 'zh' },
    { lang: 'English', locale: 'en' }
  ],
  locale: 'zh',
  dialog: false,
  user: user.state
};

export default state;
