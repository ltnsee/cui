<template>
  <v-row justify="center">
    <v-dialog v-model="$store.state.dialog" :persistent="persistent" :width="width">
      <v-card>
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text>123</v-card-text>
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
import { IDialogConfig } from './interface';

@Component
export default class AppDialog extends Vue {
  @Prop(Object) dialogConfig?: IDialogConfig;

  created() {
    console.log('dialogConfig', this.dialogConfig);
  }

  get persistent() {
    return this.dialogConfig && this.dialogConfig.persistent;
  }

  get width() {
    return this.dialogConfig && this.dialogConfig.width ? this.dialogConfig.width : 600;
  }

  get title() {
    return this.dialogConfig && this.dialogConfig.title ? this.dialogConfig.title : 'Title';
  }

  handelClose() {
    this.$store.dispatch('SET_DIALOG_ASYN', false);
  }
}
</script>

<style scoped lang="scss"></style>
