<template>
  <v-container class="mt-5">
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
      class="mt-5"
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
          <job-description-form />
          <v-container>
            <v-row>
              <v-col
                sm="12"
                md="10"
                lg="8"
                xl="6"
                class="d-flex justify-end mx-auto"
              >
                <v-btn plain color="primary" @click="tab = 1">
                  Next
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <job-company-form />
          <v-container>
            <v-row>
              <v-col
                sm="12"
                md="10"
                lg="8"
                xl="6"
                class="d-flex justify-end mx-auto"
              >
                <v-btn plain color="primary" @click="tab = 0">
                  <v-icon>mdi-chevron-left</v-icon>
                  Back
                </v-btn>
                <v-btn plain color="primary" @click="tab = 2">
                  Next
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <job-contact-form />
          <v-container>
            <v-row>
              <v-col
                sm="12"
                md="10"
                lg="8"
                xl="6"
                class="d-flex justify-end mx-auto"
              >
                <v-btn plain color="primary" @click="tab = 1">
                  <v-icon>mdi-chevron-left</v-icon>
                  Back
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
    <v-divider />
    <v-card-actions class="mt-5">
      <v-spacer />
      <v-btn to="/home" rounded large outlined width="100">Cancel</v-btn>
      <v-btn to="/home" rounded large color="primary" width="100">Save</v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import JobContactForm from "@/components/JobContactForm/JobContactForm";
import JobCompanyForm from "@/components/JobCompanyForm/JobCompanyForm";
import JobDescriptionForm from "@/components/JobDescriptionForm/JobDescriptionForm";

export default {
  name: "JmNewJobInfos",
  components: {
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
