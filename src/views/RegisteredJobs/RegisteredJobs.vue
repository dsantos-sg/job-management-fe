<template>
  <v-container>
    <v-card-title class="justify-center my-5">
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
  </v-container>
</template>

<script>
import JmRegisteredJobsCards from "@/components/JmRegisteredJobsCards/JmRegisteredJobsCards";
import JmRegisteredJobsList from "@/components/JmRegisteredJobsList/JmRegisteredJobsList";
import JmRegisteredJobToolbar from "@/components/JmRegisteredJobToolbar/JmRegisteredJobToolbar";

export default {
  name: "RegisteredJobs",
  components: {
    JmRegisteredJobToolbar,
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
