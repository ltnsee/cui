import Vue from 'vue';
import Vuex, { Store, StoreOptions, ModuleTree } from 'vuex';
import user, { IUser } from './modules/user';

Vue.use(Vuex);
interface IState {
  user: IUser;
}
interface IStore extends Store<IState> {}

const store: IStore = new Vuex.Store({
  modules: {
    user
  }
});

export default store;
