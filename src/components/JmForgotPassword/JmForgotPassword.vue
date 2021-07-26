<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="500"
    v-model="setEditItem"
    persistent
  >
    <v-card class="pa-5" elevation="12">
      <v-card-title>
        <h3 class="font-weight-regular">Please, type here your email.</h3>
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="E-mail"
          placeholder="name@mail.com"
          outlined
          clearable
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="primary" width="100" @click="closeDialog">Reset</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "JmForgotPassword",
  props: {
    setEditItem: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      tab: null,
    };
  },
  methods: {
    closeDialog() {
      this.$emit("setCloseDialog", false);
    },
  },
};
</script>

<style scoped></style>
