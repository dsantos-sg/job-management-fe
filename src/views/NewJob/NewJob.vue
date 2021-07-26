<template>
  <v-container>
    <jm-main-card>
      <v-card-title class="justify-center mb-5">
        <h2 class="font-weight-light">Add a new job</h2>
      </v-card-title>
      <v-tabs
        v-model="tab"
        centered
        light
        center-active
        show-arrows
        color="primary"
        background-color="transparent"
        class="pa-5"
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
        <v-tabs-items class="transparent" v-model="tab">
          <v-tab-item>
            <v-card flat>
              <job-description-form class="my-5" />
              <v-card-actions>
                <v-spacer />
                <v-btn plain color="primary" @click="tab = 1">
                  Next
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <job-company-form class="my-5" />
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
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <job-contact-form class="my-5" />
              <v-card-actions>
                <v-spacer />
                <v-btn plain color="primary" @click="tab = 1">
                  <v-icon>mdi-chevron-left</v-icon>
                  Back
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
      <v-container>
        <v-row class="d-flex justify-center my-5">
          <v-col cols="12">
            <v-card-actions>
              <v-spacer />
              <v-btn outlined width="100">Cancel</v-btn>
              <v-btn @click="submit" color="primary" width="100">Save</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </jm-main-card>
  </v-container>
</template>

<script>
import JobDescriptionForm from "@/components/JobDescriptionForm/JobDescriptionForm";
import JobCompanyForm from "@/components/JobCompanyForm/JobCompanyForm";
import JobContactForm from "@/components/JobContactForm/JobContactForm";
import JmMainCard from "@/components/JmMainCard/JmMainCard";
export default {
  name: "NewJob",
  components: {
    JmMainCard,
    JobContactForm,
    JobCompanyForm,
    JobDescriptionForm,
  },
  data() {
    return {
      tab: "",
    };
  },
};
</script>

<style scoped></style>
