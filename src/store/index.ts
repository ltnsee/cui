import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';
import { IState } from './interface';
// modules
import user from './modules/user';

Vue.use(Vuex);

const store: Store<IState> = new Vuex.Store({
  actions,
  mutations,
  getters,
  state,
  modules: {
    user
  }
});

export default store;
