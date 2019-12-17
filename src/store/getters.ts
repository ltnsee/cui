import state from './state';
import { IState } from './interface';
import { GetterTree } from 'vuex';

const getters: GetterTree<IState, any> = {
  author: (state: IState) => state.author
};

export default getters;
