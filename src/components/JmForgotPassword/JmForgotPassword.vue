<template>
  <v-dialog max-width="600" v-model="setEditItem" persistent>
    <v-card rounded="xl" outlined class="pa-5" elevation="12">
      <v-card-title>
        <h3 class="font-weight-regular mb-8">Please, type here your email.</h3>
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="E-mail"
          placeholder="name@mail.com"
          outlined
          clearable
          rounded
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn rounded large color="secondary" width="120" @click="closeDialog"
          >Cancel
        </v-btn>
        <v-btn
          color="primary"
          rounded
          large
          width="120"
          @click="confirmEmailDialog"
          >OK
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog max-width="500" v-model="confirmEmail" persistent>
      <v-card class="pa-5" rounded="xl" elevation="12">
        <v-card-title>
          <h3 class="font-weight-regular">Attention</h3>
        </v-card-title>
        <v-card-text>
          <h5 class="subtitle-1">
            A link with reset instruction was sent to your email.
          </h5>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" rounded large width="150" @click="closeDialog"
            >Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      confirmEmail: false,
    };
  },
  methods: {
    closeDialog() {
      this.$emit("setCloseDialog", false);
    },
    confirmEmailDialog() {
      this.confirmEmail = true;
    },
  },
};
</script>

<style scoped></style>
