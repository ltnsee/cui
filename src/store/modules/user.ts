import store from '@/store';
import { Store } from 'vuex';

const user: any = {
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
