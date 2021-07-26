<template>
  <v-container>
    <v-row>
      <v-col cols="6" class="mx-auto">
        <jm-logo class="justify-center my-10 logo-font white--text" />
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12" md="6" class="mx-auto">
        <v-card class="pa-10 mb-10">
          <v-card-title class="justify-center">
            <h1 class="font-weight-light my-5">Login</h1>
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="E-mail"
              placeholder="name@mail.com"
              outlined
              clearable
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              outlined
              clearable
            ></v-text-field>
            <v-btn class="justify-center" plain @click.stop="resetDialog"
              >Forgot your password?</v-btn
            >
          </v-card-text>
          <v-card-actions class="py-5">
            <v-spacer />
            <v-btn block large color="primary" to="/home">
              <v-icon> mdi-play </v-icon>
            </v-btn>
            <v-spacer />
          </v-card-actions>
          <a>New user? Please, register here.</a>
        </v-card>
      </v-col>
    </v-row>
    <jm-forgot-password
      :set-edit-item="setDialog"
      @setCloseDialog="setDialog = $event"
    />
  </v-container>
</template>

<script>
import JmLogo from "@/components/JmLogo/JmLogo";
import JmForgotPassword from "@/components/JmForgotPassword/JmForgotPassword";
export default {
  name: "LoginPage",
  components: { JmForgotPassword, JmLogo },
  data() {
    return {
      setDialog: false,
    };
  },
  methods: {
    resetDialog() {
      this.setDialog = !this.setDialog;
    },
  },
};
</script>

<style scoped></style>
