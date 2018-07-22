<template>
  <v-layout row justify-center>
    <v-dialog v-model="visible" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">{{title}}</v-card-title>
        <v-card-text>{{message}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="buttons.cancel.show" :color="`${buttons.cancel.color} darken-1`" 
          flat @click.native="actionButton(false)">{{buttons.cancel.text}}</v-btn>
          <v-btn v-if="buttons.ok.show" :color="`${buttons.ok.color} darken-1`" 
          @click.native="actionButton(true)">{{buttons.ok.text}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: ["title", "message", "visible", "buttons"],
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    actionButton(val) {
      this.$emit("close");
    }
  },
  computed: {
    /* showDialog: {
      get() {
        return this.isVisible;
      },
      set(val) {
        console.warn(`Setting isVisible to `, val);
        this.isVisible = val;
        return true;
      }
    } */
  },
  mounted() {
    console.warn(`--------------------- Setting isVisible to `, this.visible);
    // this.isVisible = this.visible;
  },
  watch: {}
};
</script>

<style scoped>

</style>
