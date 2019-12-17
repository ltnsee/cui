import store from '@/store';
import { Store, StoreOptions, ModuleTree } from 'vuex';

const user = {
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
