<template>
  <v-container class="fill-height">
    <v-row>
      <v-col sm="12" md="6" class="mx-auto d-flex flex-column">
        <jm-logo class="mx-auto mb-8" logo-style="dark" logo-size="400" />
        <v-card
          outlined
          rounded="xl"
          class="jm-bg-cards jm-light-border fill-height"
        >
          <v-container>
            <v-row>
              <v-col sm="12" md="10" lg="8" xl="6" class="mx-auto my-8">
                <v-card-title class="justify-center">
                  <h1 class="font-weight-light mb-8">Sign-in</h1>
                </v-card-title>
                <v-text-field
                  label="E-mail"
                  placeholder="name@mail.com"
                  outlined
                  clearable
                  rounded
                ></v-text-field>
                <v-text-field
                  label="Password"
                  type="password"
                  outlined
                  rounded="lg"
                  clearable
                ></v-text-field>
                <a class="justify-center" plain @click.stop="forgotPassword">
                  <h4 class="grey--text font-weight-regular">
                    Forgot your password?
                  </h4>
                </a>
                <v-card-actions class="py-5">
                  <v-spacer />
                  <v-btn
                    block
                    rounded="pill"
                    elevation="0"
                    large
                    color="primary"
                    to="/home"
                  >
                    <span class="mr-1">Sign-in</span>
                    <v-icon> mdi-play</v-icon>
                  </v-btn>
                  <v-spacer />
                </v-card-actions>
                <a @click.stop="newUser">New user? Please, register here.</a>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <jm-forgot-password
      :set-edit-item="setForgotPassword"
      @setCloseDialog="setForgotPassword = $event"
    />
    <jm-new-user
      :set-edit-item="setNewUser"
      @setCloseDialog="setNewUser = $event"
    />
  </v-container>
</template>

<script>
import JmLogo from "@/components/JmLogo/JmLogo";
import JmForgotPassword from "@/components/JmForgotPassword/JmForgotPassword";
import JmNewUser from "@/components/JmNewUser/JmNewUser";

export default {
  name: "LoginPage",
  components: { JmNewUser, JmForgotPassword, JmLogo },
  data() {
    return {
      setForgotPassword: false,
      setNewUser: false,
    };
  },
  methods: {
    forgotPassword() {
      this.setForgotPassword = !this.setForgotPassword;
    },
    newUser() {
      this.setNewUser = !this.setNewUser;
    },
  },
};
</script>

<style scoped></style>
