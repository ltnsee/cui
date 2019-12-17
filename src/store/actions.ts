import state from './state';
import { IState } from './interface';
import { ActionTree } from 'vuex';

const actions: ActionTree<IState, any> = {
  SET_AUTHOR_ASYN({ commit, state: RootStateTypes }, data: string) {
    commit('SET_AUTHOR', data);
  }
};

export default actions;
