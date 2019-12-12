import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import routes from './config';

Vue.use(VueRouter);

NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to: Route, from: Route, next: any) => {
  NProgress.start();
  next();
});

router.afterEach((to: Route, from: Route) => {
  NProgress.done();
});

export default router;
