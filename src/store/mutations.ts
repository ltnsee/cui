import state from './state';
import { IState } from './interface';
import { MutationTree } from 'vuex';

const mutations: MutationTree<IState> = {
  SET_AUTHOR(state: IState, data: string) {
    state.author = data;
  }
};

export default mutations;
