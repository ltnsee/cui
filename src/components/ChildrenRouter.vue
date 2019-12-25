<template>
  <v-row justify="center">
    <v-dialog :value="dialog" persistent :width="400">
      <v-card>
        <v-card-title>
          <span class="headline">Children Router</span>
        </v-card-title>
        <v-card-text>Test Children Router</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" text @click="handelClose">Close</v-btn>
          <v-btn color="primary darken-1" text @click="handelClose">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class ChildrenRouter extends Vue {
  private dialog: boolean = true;

  handelClose() {
    console.log('router', this.$router);
    this.$router.back();
  }
}
</script>

<style scoped lang="scss"></style>
