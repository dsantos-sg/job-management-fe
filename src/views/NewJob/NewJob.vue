<template>
  <v-container>
    <job-description-form class="my-5" />
    <job-company-form class="my-5" />
    <job-contact-form class="my-5" />
  </v-container>
</template>

<script>
import JobDescriptionForm from "@/components/JobDescriptionForm/JobDescriptionForm";
import JobCompanyForm from "@/components/JobCompanyForm/JobCompanyForm";
import JobContactForm from "@/components/JobContactForm/JobContactForm";
export default {
  name: "NewJob",
  components: { JobContactForm, JobCompanyForm, JobDescriptionForm },
};
</script>

<style scoped></style>
