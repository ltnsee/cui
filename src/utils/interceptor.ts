import Vue from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import VueAxios from 'vue-axios';
import NProgress from 'nprogress';
import messageHelper from './message';
import eventHelper from './event';
import store from '@/store';

Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = '/';
Vue.axios.defaults.withCredentials = true;
Vue.axios.defaults.headers = {
  'x-requested-with': 'XMLHttpRequest'
};

// request interceptor
Vue.axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    NProgress.start();
    if (config.method === 'post') {
      config.headers['Content-Type'] = 'application/json;charset=utf-8';
    }
    if (store.state.user.token) {
      config.headers['x-auth-token'] = store.state.user.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
Vue.axios.interceptors.response.use(
  (res: AxiosResponse) => {
    NProgress.done();
    if (res.status === 401 || res.status === 204) {
      eventHelper.dispatch(eventHelper.event.AuthFail);
    }
    if (res.data.status !== 0) {
      if (res.data.noticeMessage) {
        messageHelper.noticeMessage(res.data.noticeMessage);
      } else if (res.data.warnMessage) {
        messageHelper.warnMessage(res.data.warnMessage);
      }
    }
    if (res.data.code === 400 || res.data.code === 404 || res.data.code === 401) {
      return Promise.reject(res.data);
    }
    return res.data;
  },
  (err: AxiosError) => {
    NProgress.done();
    let res = err.response;
    if (!res) {
      messageHelper.errorMessage(err.message);
      return Promise.reject({});
    }
    if (res.status === 401) {
      eventHelper.dispatch(eventHelper.event.AuthFail);
    }
    if (res.data.noticeMessage) {
      messageHelper.noticeMessage(res.data.noticeMessage);
    } else if (res.data.warnMessage) {
      messageHelper.warnMessage(res.data.warnMessage);
    } else if (res.data && res.data.message) {
      messageHelper.errorMessage(res.data.errorMessage);
    }
    return Promise.reject(res.data);
  }
);
