import state from './state';
import { IState } from './interface';
import { ActionTree } from 'vuex';

const actions: ActionTree<IState, any> = {
  SET_AUTHOR_ASYN({ commit }, author: string) {
    commit('SET_AUTHOR', author);
  },
  SET_DIALOG_ASYN({ commit }, dialog: string) {
    commit('SET_DIALOG', dialog);
  }
};

export default actions;
