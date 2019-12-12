import Vue from 'vue';
import qs from 'qs';

export const login = (params: any) => Vue.axios.post('/login', params);

export const getUsers = () => Vue.axios.get('/users');

export const getUserByUserId = (userId: string) => Vue.axios.get(`/users/${userId}`);

export const addUser = (params: any) => Vue.axios.post('/users', params);
