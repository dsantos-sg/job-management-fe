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
            <v-switch
              :value="jobApplication.sent"
              label="Sent"
              @input="updateSent"
            />
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
              <v-date-picker
                v-model="jobApplication.applicationDate"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  Cancel
                </v-btn>
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
              :value="jobApplication.additionalInfos"
              outlined
              clearable
              auto-grow
              rounded
              rows="4"
              label="Additional infos"
              @input="updateAdditionalInfos"
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
  props: ["selectedApplication", "updateThisJob"],
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
  methods: {
    updateWithEmit() {
      this.$emit("setApplication", this.jobApplication);
    },
    updateSent(e) {
      this.jobApplication.sent = e;
    },
    updateAdditionalInfos(e) {
      this.jobApplication.additionalInfos = e;
    },
  },
  updated() {
    this.updateWithEmit();
  },
};
</script>

<style scoped></style>
