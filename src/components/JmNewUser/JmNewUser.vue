<template>
  <v-dialog max-width="600" v-model="setEditItem" persistent>
    <v-card rounded="xl" outlined class="pa-5" elevation="12">
      <v-card-title>
        <h3 class="font-weight-regular mb-8">New user registering</h3>
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Name"
          placeholder="John"
          outlined
          rounded
          clearable
        ></v-text-field>
        <v-text-field
          label="E-mail"
          type="email"
          placeholder="name@mail.com"
          outlined
          rounded
          clearable
        ></v-text-field>
        <v-text-field
          label="Password"
          placeholder="********"
          type="password"
          outlined
          rounded
          clearable
        ></v-text-field>
        <v-text-field
          label="Confirm your Password"
          placeholder="********"
          type="password"
          outlined
          rounded
          clearable
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn rounded large color="secondary" width="120" @click="closeDialog"
          >Cancel
        </v-btn>
        <v-btn
          rounded
          large
          color="primary"
          width="120"
          @click="confirmEmailDialog"
          >Ok
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog max-width="500" v-model="confirmEmail" persistent>
      <v-card rounded="xl" outlined class="pa-5" elevation="12">
        <v-card-title>
          <h3 class="font-weight-regular">Attention</h3>
        </v-card-title>
        <v-card-text>
          <h5 class="subtitle-1">
            Please, check your email and validate the sign-in.
          </h5>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn rounded large color="primary" width="100" @click="closeDialog"
            >Ok</v-btn
          >
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
