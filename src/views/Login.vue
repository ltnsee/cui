<template>
  <div class="login">
    login
    <v-btn @click="handelClickBtn">登录</v-btn>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import api from '@/utils/api';

@Component
export default class Login extends Vue {
  handelClickBtn = () => {
    const params = {
      username: 'xiaowu',
      password: '123456'
    };
    console.log('api', api, api.login);
    api.login(params).then((res) => {
      console.log('users', JSON.stringify(res), this);
      this.$store.dispatch('setToken', res.token);
      return res;
    });
  };
}
</script>
