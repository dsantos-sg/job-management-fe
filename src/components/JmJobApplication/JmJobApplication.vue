<template>
  <v-card flat>
    <v-card flat>
      <v-card-title>Application</v-card-title>
      <v-card-text>
        <v-switch
          v-model="applicationSent"
          :label="`Application sent:  ${applicationSent.toString()}`"
        />
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
              label="Application sent date"
              readonly
              v-bind="attrs"
              v-on="on"
              clearable
            ></v-text-field>
          </template>
          <v-date-picker v-model="applicationDate" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
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
          v-model="additionalInfos"
          outlined
          clearable
          label="Additional infos"
          name="AdditionalInfos"
        ></v-textarea>
      </v-card-text>
    </v-card>
  </v-card>
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
