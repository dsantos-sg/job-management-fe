<template>
  <v-card elevation="12" rounded="xl">
    <v-card-title>
      <h3 class="font-weight-light mx-auto">Application</h3>
    </v-card-title>
    <v-card-text class="pa-sm-3 pa-md-8 pa-lg-10 pa-xl-12">
      <v-switch v-model="compSent" label="Sent" />
      <!--            :label="`Application sent:  ${applicationSent.toString()}`"  TODO to get string from switch activation-->
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="jobApplication.applicationDate"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            outlined
            v-model="jobApplication.applicationDate"
            label="Sent date"
            readonly
            rounded
            v-bind="attrs"
            v-on="on"
            clearable
            @blur="updateWithEmit"
          ></v-text-field>
        </template>
        <v-date-picker v-model="jobApplication.applicationDate" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false"> Cancel</v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(jobApplication.applicationDate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
      <v-textarea
        v-model="compAdditionalInfos"
        outlined
        clearable
        auto-grow
        rounded
        rows="4"
        label="Additional infos"
      ></v-textarea>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "JmJobApplication",
  props: ["selectedJob"],
  data() {
    return {
      modal: false,
      date: null,
      // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      jobApplication: {
        sent: "",
        applicationDate: "",
        additionalInfos: "",
      },
    };
  },
  computed: {
    compSent: {
      get() {
        return this.selectedJob.sent;
      },
      set(val) {
        this.jobApplication.sent = val;
      },
    },
    compAdditionalInfos: {
      get() {
        return this.selectedJob.additionalInfos;
      },
      set(val) {
        this.jobApplication.additionalInfos = val;
      },
    },
  },
  methods: {
    updateWithEmit() {
      this.$emit("setApplication", this.jobApplication);
    },
  },
  updated() {
    this.updateWithEmit();
  },
};
</script>

<style scoped></style>
