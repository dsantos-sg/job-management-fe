<template>
  <v-dialog max-width="500" v-model="setEditItem" persistent>
    <v-card class="pa-5" elevation="12">
      <v-card-title>
        <h3 class="font-weight-regular">New user registering</h3>
      </v-card-title>
      <v-card-text class="mt-5">
        <v-text-field
          label="Name"
          placeholder="John"
          outlined
          clearable
        ></v-text-field>
        <v-text-field
          label="E-mail"
          type="email"
          placeholder="name@mail.com"
          outlined
          clearable
        ></v-text-field>
        <v-text-field
          label="Password"
          placeholder="********"
          type="password"
          outlined
          clearable
        ></v-text-field>
        <v-text-field
          label="Confirm your Password"
          placeholder="********"
          type="password"
          outlined
          clearable
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn outlined color="secondary" width="100" @click="closeDialog"
          >Cancel
        </v-btn>
        <v-btn color="primary" width="100" @click="confirmEmailDialog"
          >Ok</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-dialog max-width="500" v-model="confirmEmail" persistent>
      <v-card class="pa-5" elevation="12">
        <v-card-title>
          <h3 class="font-weight-regular">Attention</h3>
        </v-card-title>
        <v-card-text>
          <h5 class="subtitle-1">
            Please, check your email and validate the sign-in.
          </h5>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" width="100" @click="closeDialog">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<script>
export default {
  name: "JmNewUser",
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
      this.confirmEmail = false;
    },
    confirmEmailDialog() {
      this.confirmEmail = true;
    },
  },
};
</script>

<style scoped></style>
