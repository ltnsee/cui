<template>
  <div class="test">
    <user-list :usersList="usersList" />
    <v-btn color="green" @click="handelClickBtn">Click me!</v-btn>
    <v-btn color="blue" @click="handelClickLogin">登录</v-btn>
    <v-btn color="primary" @click="handelClickFromDialog">Open Dialog</v-btn>
    <v-btn color="primary" @click="handelClickChildrenRouter">Children Router</v-btn>
    <app-dialog :dialogConfig="{ width: 400, persistent: true, title: 'My Dialog' }" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserList from '@/components/UserList.vue';
import AppDialog from '@/components/AppDialog.vue';
import userApi from '@/api/user';
@Component({
  name: 'Test',
  components: {
    'user-list': UserList,
    'app-dialog': AppDialog
  }
})
export default class Test extends Vue {
  private usersList: any = null;

  created() {
    this.handelClickBtn();
  }

  handelClickBtn() {
    userApi.getUsers().then((res) => {
      console.log('users', JSON.stringify(res));
      this.usersList = res.data;
      return res;
    });
  }

  handelClickLogin() {
    const params = {
      username: 'xiaowu',
      password: '123456'
    };
    userApi.login(params).then((res: any) => {
      console.log('users', JSON.stringify(res));
      this.$store.dispatch('setToken', res.token);
      return res;
    });
  }

  handelClickFromDialog() {
    this.$store.commit('SET_DIALOG', true);
  }

  handelClickChildrenRouter() {
    this.$router.push(`${this.$route.path}/${123}`);
  }
}
</script>

<style scoped lang="scss"></style>
