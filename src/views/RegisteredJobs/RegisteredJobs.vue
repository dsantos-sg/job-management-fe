<template>
  <v-container>
    <jm-main-card>
      <v-card-title class="justify-center mb-5">
        <h2 class="font-weight-light">Registered jobs</h2>
      </v-card-title>
      <jm-registered-job-toolbar @setView="viewStyle = $event" />
      <v-scroll-x-transition mode="in-out">
        <jm-registered-jobs-cards v-if="viewStyle === 'grid'" />
      </v-scroll-x-transition>
      <v-scroll-x-transition mode="out-in">
        <jm-registered-jobs-list v-if="viewStyle === 'list'" />
      </v-scroll-x-transition>
      <!--    <jm-job-details />-->
    </jm-main-card>
  </v-container>
</template>

<script>
import JmRegisteredJobsCards from "@/components/JmRegisteredJobsCards/JmRegisteredJobsCards";
import JmRegisteredJobsList from "@/components/JmRegisteredJobsList/JmRegisteredJobsList";
// import JmJobDetails from "@/components/JmJobDetails/JmJobDetails";
import JmRegisteredJobToolbar from "@/components/JmRegisteredJobToolbar/JmRegisteredJobToolbar";
import JmMainCard from "@/components/JmMainCard/JmMainCard";
export default {
  name: "RegisteredJobs",
  components: {
    JmMainCard,
    JmRegisteredJobToolbar,
    // JmJobDetails,
    JmRegisteredJobsList,
    JmRegisteredJobsCards,
  },
  data() {
    return {
      viewStyle: "grid",
    };
  },
};
</script>

<style scoped></style>
