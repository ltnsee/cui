import Vue from 'vue';
import qs from 'qs';
import { storeRequest, clearRequest } from './stop.service';

// export const login = (params: any) => Vue.axios.post('/login', params);

// export const getUsers = () => Vue.axios.get('/users');

// export const getUserByUserId = (userId: string) => Vue.axios.get(`/users/${userId}`);

// export const addUser = (params: any) => Vue.axios.post('/users', params);

export class Api {
  @clearRequest(Api.prototype.getUsers)
  login(params: any) {
    return Vue.axios.post('/login', params);
  }

  @storeRequest
  getUsers() {
    return Vue.axios.get('/users');
  }
}
const api = new Api();

export default api;
