<template>
  <v-container>
    <v-card-title class="justify-center my-5">
      <h2 class="font-weight-light">Add a new job</h2>
    </v-card-title>
    <v-container>
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
                  <!-- TODO Clean code props items, ex :update-this-job. Use if (selected-job = {}) do something -->
                  <job-description-form
                    @setJobDescription="newJob.jobDescription = $event"
                    :selected-job="{}"
                    :update-this-job="false"
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
                    @setNewCompany="newJob.company = $event"
                    :selected-company="{}"
                    :update-this-job="false"
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
                    @setNewJobContact="newJob.contacts = $event"
                    :selected-contacts="[{}]"
                    :update-this-job="false"
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
                    @setNewJobApplication="newJob.application = $event"
                    :selected-application="{}"
                    :update-this-job="false"
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
                    @setNewJobInterviews="newJob.interviews = $event"
                    :selected-interviews="[{}]"
                    :update-this-job="false"
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
                    @setNewJobFollowUp="newJob.followUp = $event"
                    :selected-follow-up="{}"
                    :update-this-job="false"
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
      <v-card-actions class="mt-5">
        <v-spacer />
        <v-btn to="/home" rounded large outlined color="secondary" width="100"
          >Cancel
        </v-btn>
        <v-btn rounded large color="primary" width="100" @click="submit"
          >Save
        </v-btn>
      </v-card-actions>
    </v-container>
  </v-container>
</template>

<script>
import JobContactForm from "@/components/JobContactForm/JobContactForm";
import JobCompanyForm from "@/components/JobCompanyForm/JobCompanyForm";
import JobDescriptionForm from "@/components/JobDescriptionForm/JobDescriptionForm";
import JmFollowUp from "@/components/JmFollowUp/JmFollowUp";
import JmInterviews from "@/components/JmInterviews/JmInterviews";
import JmJobApplication from "@/components/JmJobApplication/JmJobApplication";

export default {
  name: "NewJob",
  components: {
    JobContactForm,
    JobCompanyForm,
    JobDescriptionForm,
    JmFollowUp,
    JmInterviews,
    JmJobApplication,
  },
  data() {
    return {
      tab: "",
      newJob: {
        jobDescription: {},
        company: {},
        contacts: [],
        application: {},
        interviews: [],
        followUp: {},
      },
    };
  },
  methods: {
    async submit() {
      await this.$store.dispatch("addNewJobData", {
        jobDescription: this.newJob.jobDescription,
        company: this.newJob.company,
        contacts: this.newJob.contacts,
        application: this.newJob.application,
        interviews: this.newJob.interviews,
        followUp: this.newJob.followUp,
      });
      this.$store.commit("RESET_NEW_JOB");
    },
  },
};
</script>

<style scoped></style>
