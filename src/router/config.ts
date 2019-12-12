import Home from '../views/Home.vue';

export const publicRoute = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('../views/Login.vue')
  },
  // {
  //   path: '/register',
  //   name: '注册',
  //   component: () => import('../views/register.vue')
  // }
];

export default publicRoute;
