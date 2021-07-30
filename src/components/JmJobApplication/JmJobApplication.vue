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
          <v-card-text>
            <v-switch v-model="applicationSent" label="Sent" />
            <!--            :label="`Application sent:  ${applicationSent.toString()}`"  TODO to get string from switch activation-->
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="applicationDate"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  outlined
                  v-model="applicationDate"
                  label="Sent date"
                  readonly
                  rounded
                  v-bind="attrs"
                  v-on="on"
                  clearable
                ></v-text-field>
              </template>
              <v-date-picker v-model="applicationDate" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  Cancel</v-btn
                >
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(applicationDate)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
            <v-textarea
              outlined
              clearable
              auto-grow
              rounded
              rows="4"
              label="Additional infos"
              name="AdditionalInfos"
            ></v-textarea>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "JmJobApplication",
  data() {
    return {
      modal: false,
      date: null,
      // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      applicationSent: false,
      menuApplicationSent: false,
      applicationDate: null,
      additionalInfos: null,
    };
  },
};
</script>

<style scoped></style>
