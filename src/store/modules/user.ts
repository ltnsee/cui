import store from '@/store';
import { StoreOptions } from 'vuex';

interface IState {
  token: string | null;
}

export interface IUser extends StoreOptions<IState> {}

const user: IUser = {
  state: {
    token: null
  },
  mutations: {
    SET_TOKEN: (state: any, token: string) => {
      state.token = token;
    }
  },
  actions: {
    setToken({ commit }: any, token: string) {
      commit('SET_TOKEN', token);
    }
  }
};

export default user;
