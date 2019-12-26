<template>
  <div id="app">
    <v-app class="router-content">
      <nav-bar />
      <router-view />
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import router from './router';
import eventHelper from '@/utils/event.helper';
import VueCookies from 'vue-cookies';
import NavBar from '@/components/NavBar.vue';

@Component({
  name: 'App',
  components: {
    'nav-bar': NavBar
  }
})
export default class App extends Vue {
  created() {
    eventHelper.subscribe(eventHelper.event.AuthFail, () => {
      router.push('/login');
      VueCookies.remove('userinfo');
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .router-content {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
  }
}
</style>
