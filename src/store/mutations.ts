import state from './state';
import { IState } from './interface';
import { MutationTree } from 'vuex';

const mutations: MutationTree<IState> = {
  SET_AUTHOR(state: IState, author: string) {
    state.author = author;
  },
  SET_DIALOG(state: IState, dialog: boolean) {
    state.dialog = dialog;
  }
};

export default mutations;
