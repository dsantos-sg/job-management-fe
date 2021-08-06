<template>
  <v-container>
    <v-card elevation="10" rounded="xl">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="$store.getters.jobItems"
        :search="search"
        :single-select="singleSelect"
        item-key="name"
        show-select
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "JmRegisteredJobsList",
  data() {
    return {
      singleSelect: false,
      search: "",
      headers: [
        { text: "Job title", value: "jobDescription.jobTitle" },
        { text: "Code", value: "jobDescription.jobCode" },
        { text: "Company", value: "company.companyName" },
        { text: "Publish date", value: "jobDescription.publishDate" },
        { text: "Salary offer", value: "followUp.salaryOffer" },
        { text: "Application Sent", value: "application.applicationSent" },
        { text: "Address", value: "company.address" },
        { text: "Priority", value: "jobDescription.priority" },
        { text: "Rating", value: "followUp.rating" },
        { text: "Status", value: "followUp.status" },
      ],
    };
  },
};
</script>

<style scoped></style>
