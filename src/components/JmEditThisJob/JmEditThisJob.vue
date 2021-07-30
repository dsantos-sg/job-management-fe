<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="996"
    max
    v-model="setEditItem"
    persistent
  >
    <v-card tile class="jm-bg-cards bg-blur" min-height="1080" elevation="12">
      <v-tabs
        v-model="tab"
        centered
        light
        center-active
        show-arrows
        color="primary"
        background-color="transparent"
      >
        <v-tab>
          <v-icon left> mdi-tools</v-icon>
          Job description
        </v-tab>
        <v-tab>
          <v-icon left> mdi-factory</v-icon>
          Company
        </v-tab>
        <v-tab>
          <v-icon left> mdi-card-account-mail</v-icon>
          Contacts
        </v-tab>
        <v-tab>
          <v-icon left> mdi-file-send</v-icon>
          Application
        </v-tab>
        <v-tab>
          <v-icon left> mdi-calendar-cursor</v-icon>
          Interview
        </v-tab>
        <v-tab>
          <v-icon left> mdi-sync</v-icon>
          Follow-up
        </v-tab>
        <v-tabs-items class="transparent" v-model="tab">
          <!-- JOB DESCRIPTION ------------------------------------------------------------------------------------------>
          <v-tab-item>
            <job-description-form />
            <v-card-actions>
              <v-spacer />
              <v-btn plain color="primary" @click="tab = 1">
                Next
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-tab-item>
          <!-- COMPANY -------------------------------------------------------------------------------------------------->
          <v-tab-item>
            <job-company-form />
            <v-card-actions>
              <v-spacer />
              <v-btn plain color="primary" @click="tab = 0">
                <v-icon>mdi-chevron-left</v-icon>
                Back
              </v-btn>
              <v-btn plain color="primary" @click="tab = 2">
                Next
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-tab-item>
          <!-- CONTACTS ------------------------------------------------------------------------------------------------->
          <v-tab-item>
            <job-contact-form />
            <v-card-actions>
              <v-spacer />
              <v-btn plain color="primary" @click="tab = 1">
                <v-icon>mdi-chevron-left</v-icon>
                Back
              </v-btn>
              <v-btn plain color="primary" @click="tab = 3">
                Next
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-tab-item>
          <!-- APPLICATION ---------------------------------------------------------------------------------------------->
          <v-tab-item>
            <jm-job-application />
            <v-card-actions>
              <v-spacer />
              <v-btn plain color="primary" @click="tab = 2">
                <v-icon>mdi-chevron-left</v-icon>
                Back
              </v-btn>
              <v-btn plain color="primary" @click="tab = 4">
                Next
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-tab-item>
          <!-- INTERVIEW ------------------------------------------------------------------------------------------------>
          <v-tab-item>
            <jm-interviews />
            <v-card-actions>
              <v-spacer />
              <v-btn plain color="primary" @click="tab = 3">
                <v-icon>mdi-chevron-left</v-icon>
                Back
              </v-btn>
              <v-btn plain color="primary" @click="tab = 5">
                Next
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-tab-item>
          <!-- FOLLOW-UP ------------------------------------------------------------------------------------------------>
          <v-tab-item>
            <jm-follow-up />
            <v-card-actions>
              <v-spacer />
              <v-btn plain color="primary" @click="tab = 4">
                <v-icon>mdi-chevron-left</v-icon>
                Back
              </v-btn>
            </v-card-actions>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
      <v-card-actions>
        <v-spacer />
        <v-btn outlined width="100" @click="closeDialog">Cancel</v-btn>
        <v-btn color="primary" width="100" @click="closeDialog">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import JobContactForm from "@/components/JobContactForm/JobContactForm";
import JobCompanyForm from "@/components/JobCompanyForm/JobCompanyForm";
import JobDescriptionForm from "@/components/JobDescriptionForm/JobDescriptionForm";
import JmJobApplication from "@/components/JmJobApplication/JmJobApplication";
import JmInterviews from "@/components/JmInterviews/JmInterviews";
import JmFollowUp from "@/components/JmFollowUp/JmFollowUp";

export default {
  name: "JmEditThisJob",
  components: {
    JmFollowUp,
    JmInterviews,
    JmJobApplication,
    JobContactForm,
    JobCompanyForm,
    JobDescriptionForm,
  },
  props: {
    setEditItem: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      tab: null,
    };
  },
  methods: {
    closeDialog() {
      this.$emit("setCloseDialog", false);
    },
  },
};
</script>

<style scoped></style>
