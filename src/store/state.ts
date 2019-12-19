import { IState } from './interface';
import user from './modules/user';
import menu from './menu';

const state: IState = {
  author: '陈小生',
  menu: menu,
  user: user.state
};

export default state;
