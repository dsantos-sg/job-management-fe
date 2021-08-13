<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="996"
    max
    v-model="setEditItem"
    persistent
  >
    <v-card tile class="jm-bg-cards bg-blur" min-height="1080" elevation="12">
      <v-card-title class="my-5">
        <v-spacer />
        <h2 class="font-weight-light">Editing</h2>
        <v-spacer />
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              ripple
              plain
              fab
              small
              v-on="on"
              v-bind="attrs"
              @click="deleteThisJob"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
          <span>Delete this job</span>
        </v-tooltip>
      </v-card-title>
      <v-divider />
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
            <v-container>
              <v-row>
                <v-col sm="12" md="12" lg="10" xl="6" class="mx-auto">
                  <job-description-form
                    @setJobDescription="updateJob.jobDescription = $event"
                    :selected-job="selectedJob.jobDescription"
                    class="mt-5"
                  />
                  <v-card-actions>
                    <v-spacer />
                    <v-btn plain color="primary" @click="tab = 1">
                      Next
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <!-- COMPANY -------------------------------------------------------------------------------------------------->
          <v-tab-item>
            <v-container>
              <v-row>
                <v-col sm="12" md="12" lg="10" xl="6" class="mx-auto">
                  <job-company-form
                    @setCompany="updateJob.company = $event"
                    :selected-job="selectedJob.company"
                    class="mt-5"
                  />
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
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <!-- CONTACTS ------------------------------------------------------------------------------------------------->
          <v-tab-item>
            <v-container>
              <v-row>
                <v-col sm="12" md="12" lg="10" xl="6" class="mx-auto">
                  <job-contact-form
                    @setContact="updateJob.contacts = $event"
                    :selected-job="selectedJob.contacts"
                    class="mt-5"
                  />
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
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <!-- APPLICATION ---------------------------------------------------------------------------------------------->
          <v-tab-item>
            <v-container>
              <v-row>
                <v-col sm="12" md="12" lg="10" xl="6" class="mx-auto">
                  <jm-job-application
                    @setApplication="updateJob.application = $event"
                    :selected-job="selectedJob.application"
                    class="mt-5"
                  />
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
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <!-- INTERVIEW ------------------------------------------------------------------------------------------------>
          <v-tab-item>
            <v-container>
              <v-row>
                <v-col sm="12" md="12" lg="10" xl="6" class="mx-auto">
                  <jm-interviews
                    @setInterviews="updateJob.interviews = $event"
                    :selected-job="selectedJob.interviews"
                    class="mt-5"
                  />
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
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <!-- FOLLOW-UP ------------------------------------------------------------------------------------------------>
          <v-tab-item>
            <v-container>
              <v-row>
                <v-col sm="12" md="12" lg="10" xl="6" class="mx-auto">
                  <jm-follow-up
                    @setFollowUp="updateJob.followUp = $event"
                    :selected-job="selectedJob.followUp"
                    class="mt-5"
                  />
                  <v-card-actions>
                    <v-spacer />
                    <v-btn plain color="primary" @click="tab = 4">
                      <v-icon>mdi-chevron-left</v-icon>
                      Back
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
      <v-divider />
      <v-card-actions class="pa-5">
        <v-spacer />
        <v-btn rounded large color="secondary" width="100" @click="closeDialog"
          >Cancel
        </v-btn>
        <v-btn rounded large color="primary" width="100" @click="submit"
          >Save
        </v-btn>
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
  props: ["setEditItem", "selectedJob"],
  data() {
    return {
      text: "",
      tab: null,
      updateJob: {
        jobDescription: null,
        company: null,
        contacts: [null],
        application: null,
        interviews: [null],
        followUp: null,
      },
    };
  },
  methods: {
    closeDialog() {
      this.$emit("setCloseDialog", false);
      this.$emit("cleanSelectedObject", {});
    },
    async submit() {
      const jobId = this.selectedJob.id;
      await this.$store.dispatch("updateJob", {
        id: jobId,
        job: {
          jobDescription: this.updateJob.jobDescription,
          company: this.updateJob.company,
          contacts: this.updateJob.contacts,
          application: this.updateJob.application,
          interviews: this.updateJob.interviews,
          followUp: this.updateJob.followUp,
        },
      });
      await this.closeDialog();
    },
    async deleteThisJob() {
      const jobId = this.selectedJob.id;
      await this.$store.dispatch("deleteThisJob", jobId);
      await this.closeDialog();
    },
  },
};
</script>

<style scoped></style>
