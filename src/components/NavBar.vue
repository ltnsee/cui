<template>
  <div class="nav-bar">
    <v-toolbar>
      <v-toolbar-title>Title</v-toolbar-title>

      <v-toolbar-items>
        <v-btn text>Link 1</v-btn>
        <v-btn text>Link 2</v-btn>
        <v-btn text>Link 3</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserList from './UserList.vue';
import userApi from '@/api/user';
@Component({
  name: 'HelloWorld',
  components: {
    'user-list': UserList
  }
})
export default class HelloWorld extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
