<template>
  <div class="user-list">
    <ul>
      <li v-for="(user, index) in usersList" :key="index">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class UserList extends Vue {
  @Prop(Array) private usersList!: Array<any>;

  created() {
    console.log('123', this.usersList);
  }

  @Watch('usersList')
  watchUsersList() {
    console.log('456', this.usersList);
  }
}
</script>

<style scoped lang="scss"></style>
