import { IState } from './interface';
import user from './modules/user';

const state: IState = {
  author: '陈小生',
  user: user.state
};

export default state;
