<template>
  <v-container>
    <v-row>
      <v-col
        sm="12"
        md="10"
        lg="8"
        xl="6"
        class="d-flex flex-column mx-auto mt-5"
      >
        <v-card elevation="10" rounded="xl">
          <v-card-title>User information</v-card-title>
          <v-container>
            <v-row class="d-flex align-center">
              <v-col cols="10">
                <v-card-title
                  ><h6 class="font-weight-regular">Name</h6></v-card-title
                >
                <v-card-subtitle
                  ><h1 class="font-weight-regular">
                    Mike Tyson
                  </h1></v-card-subtitle
                >
              </v-col>
              <v-col class="d-flex justify-end" cols="2">
                <v-btn
                  rounded
                  color="secondary"
                  large
                  @click="editName = !editName"
                >
                  <v-icon>mdi-pencil</v-icon>
                  <span class="ml-1">Edit</span>
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="d-flex align-center">
              <v-col cols="10">
                <v-card-title
                  ><h6 class="font-weight-regular">Email</h6></v-card-title
                >
                <v-card-subtitle
                  ><h1 class="font-weight-regular">
                    miketee@mail.com
                  </h1></v-card-subtitle
                >
              </v-col>
              <v-col class="d-flex justify-end" cols="2">
                <v-btn
                  rounded
                  large
                  color="secondary"
                  @click="editEmail = !editEmail"
                >
                  <v-icon>mdi-pencil</v-icon>
                  <span class="ml-1">Edit</span>
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="d-flex align-center">
              <v-col cols="10">
                <v-card-title
                  ><h6 class="font-weight-regular">Password</h6></v-card-title
                >
                <v-card-subtitle
                  ><h1 class="font-weight-regular">
                    **********
                  </h1></v-card-subtitle
                >
              </v-col>
              <v-col class="d-flex justify-end" cols="2">
                <v-btn
                  rounded
                  large
                  color="secondary"
                  @click="editPaswd = !editPaswd"
                >
                  <v-icon>mdi-pencil</v-icon>
                  <span class="ml-1">Change</span>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card-title>
                  <a @click="removeAccount = !removeAccount"
                    ><h4 class="font-weight-regular">
                      Remove your account?
                    </h4></a
                  >
                </v-card-title>
              </v-col>
            </v-row>
          </v-container>
          <v-dialog
            transition="dialog-bottom-transition"
            max-width="500"
            v-model="editName"
            persistent
          >
            <v-card rounded="xl" class="pa-5" elevation="12">
              <v-card-title>
                <h3 class="font-weight-regular">Change your name</h3>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  label="Mike Tyson"
                  outlined
                  rounded
                  clearable
                ></v-text-field>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  color="secondary"
                  rounded
                  large
                  width="100"
                  @click="closeEditName"
                  >Cancel
                </v-btn>
                <v-btn
                  color="primary"
                  rounded
                  large
                  width="100"
                  @click="closeEditName"
                  >Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            transition="dialog-bottom-transition"
            max-width="500"
            v-model="editEmail"
            persistent
          >
            <v-card class="pa-5" elevation="12">
              <v-card-title>
                <h3 class="font-weight-regular">Change your Email</h3>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  label="miketee@mail.com"
                  outlined
                  rounded
                  clearable
                ></v-text-field>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  color="secondary"
                  rounded
                  large
                  width="100"
                  @click="closeEditEmail"
                  >Cancel
                </v-btn>
                <v-btn
                  color="primary"
                  rounded
                  large
                  width="100"
                  @click="closeEditEmail"
                  >Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            transition="dialog-bottom-transition"
            max-width="500"
            v-model="editPaswd"
            persistent
          >
            <v-card rounded="xl" class="pa-5" elevation="12">
              <v-card-title>
                <h3 class="font-weight-regular">Change your password</h3>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  type="password"
                  label="Actual password"
                  outlined
                  rounded
                  clearable
                ></v-text-field>
              </v-card-text>
              <v-card-text>
                <v-text-field
                  type="password"
                  label="New password"
                  outlined
                  rounded
                  clearable
                ></v-text-field>
              </v-card-text>
              <v-card-text>
                <v-text-field
                  type="password"
                  label="Retype your new password"
                  outlined
                  rounded
                  clearable
                ></v-text-field>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  color="secondary"
                  rounded
                  large
                  width="100"
                  @click="closeEditPaswd"
                  >Cancel
                </v-btn>
                <v-btn
                  color="primary"
                  rounded
                  large
                  width="100"
                  @click="closeEditPaswd"
                  >Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            transition="dialog-bottom-transition"
            max-width="500"
            v-model="removeAccount"
            persistent
          >
            <v-card class="pa-5" elevation="12">
              <v-card-title>
                <h3 class="font-weight-regular">
                  Are you really remove your account?
                </h3>
              </v-card-title>
              <v-card-text class="mt-5">
                <v-alert dense type="error">
                  <h3 class="font-weight-regular">
                    This operation cannot be undone.
                  </h3>
                </v-alert>
              </v-card-text>
              <v-card-text>
                <v-text-field
                  type="email"
                  label="Type here your email to confirm"
                  clearable
                ></v-text-field>
              </v-card-text>

              <v-card-actions class="justify-center">
                <v-btn
                  color="secondary"
                  width="100"
                  @click="closeRemoveAccount"
                  to="/"
                  >Cancel
                </v-btn>
                <v-btn color="primary" width="100" @click="closeRemoveAccount"
                  >Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "JmUserInfoSettings",
  data() {
    return {
      editName: false,
      editEmail: false,
      editPaswd: false,
      removeAccount: false,
    };
  },
  methods: {
    closeEditName() {
      this.editName = false;
    },
    closeEditEmail() {
      this.editEmail = false;
    },
    closeEditPaswd() {
      this.editPaswd = false;
    },
    closeRemoveAccount() {
      this.removeAccount = false;
    },
  },
};
</script>

<style scoped></style>
