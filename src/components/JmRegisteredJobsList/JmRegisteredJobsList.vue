<template>
  <v-container>
    <v-card>
      <v-card-title>
        Registered jobs
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-subtitle>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
        ></v-text-field>
      </v-card-subtitle>
      <v-data-table
        :headers="headers"
        :items="jobs"
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
        { text: "Job title", value: "jobTitle" },
        { text: "Code", value: "jobCode" },
        { text: "Company", value: "companyName" },
        { text: "Publish date", value: "publishDate" },
        { text: "Salary offer", value: "salaryOffer" },
        { text: "Application Sent", value: "applicationSent" },
        { text: "Address", value: "address" },
        { text: "Priority", value: "priority" },
        { text: "Rating", value: "rating" },
        { text: "Status", value: "status" },
      ],
      jobs: [
        {
          jobTitle: "Front-end developer",
          jobCode: "XPTO[2]",
          companyName: "Google",
          publishDate: "24/05/2021",
          salaryOffer: 45000,
          applicationSent: "yes",
          address: "Schlagbaumer Str. 10, 42653 Solingen",
          priority: 1,
          rating: 4,
          status: "In progress",
        },
        {
          jobTitle: "CAD Designer",
          jobCode: "CAD[2]",
          companyName: "Mercedes-benz",
          publishDate: "02/07/2021",
          salaryOffer: 45000,
          applicationSent: "no",
          address: "Varresbecker Str. 123, 42115 Wuppertal",
          priority: 3,
          rating: 3,
          status: "In progress",
        },
        {
          jobTitle: "Back-end developer",
          jobCode: "KBZOP",
          companyName: "Microsoft",
          publishDate: "05/05/2021",
          salaryOffer: 34500,
          applicationSent: "no",
          address: "Holzmarkt 2, 50676 Köln",
          priority: 2,
          rating: 5,
          status: "Rejected",
        },
        {
          jobTitle: "Full-stack developer",
          jobCode: "FUSTKAKC",
          companyName: "DM Drogerie Markt",
          publishDate: "03/07/2021",
          salaryOffer: 57480,
          applicationSent: "yes",
          address: "Severinstraße 154-156, 50678 Köln",
          priority: 3,
          rating: 2,
          status: "In progress",
        },
        {
          jobTitle: "Front-end developer",
          jobCode: "KTLSA",
          companyName: "Facebook",
          publishDate: "30/06/2021",
          salaryOffer: 65000,
          applicationSent: true,
          address: "Caffamacherreihe 7, 20355 Hamburg",
          priority: 3,
          rating: 3,
          status: "Abandoned",
        },
        {
          jobTitle: "Front-end developer",
          jobCode: "XPTO[2]",
          companyName: "Ernst & Young GmbH",
          publishDate: "13/04/2021",
          salaryOffer: 70000,
          applicationSent: true,
          address: "Graf-Adolf-Platz 15, 40213 Düsseldorf",
          priority: 1,
          rating: 5,
          status: "In progress",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
