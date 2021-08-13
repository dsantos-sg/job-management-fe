<template>
  <v-card flat color="transparent">
    <v-card-title class="justify-center">
      <h2 class="font-weight-light">Featured jobs</h2>
    </v-card-title>
    <v-card
      flat
      color="transparent"
      v-for="(job, index) in $store.getters.jobItems"
      :key="index"
    >
      <v-card flat color="transparent" @click="setEditItem(job)">
        <job-card
          :job-title="job.jobDescription.jobTitle"
          :company="job.company.companyName"
          :company-address="job.company.geospatialData"
          :dist-from-home="job.company.distanceFromHome"
          :published-date="job.jobDescription.publishDate"
          :priority="job.jobDescription.priority"
          :rating="job.followUp.rating"
          scheduled-interviews="YES"
          :salary-offer="job.followUp.salaryOffer"
          overview="4"
          :benefits="job.jobDescription.benefits"
          :tags="job.jobDescription.tags"
          class="mx-auto my-10"
        />
      </v-card>
    </v-card>
    <jm-edit-this-job
      :selected-job="job"
      :set-edit-item="editThisJob"
      @setCloseDialog="editThisJob = $event"
    />
  </v-card>
</template>

<script>
import JobCard from "@/components/JobCard/JobCard";
import JmEditThisJob from "@/components/JmEditThisJob/JmEditThisJob";

export default {
  name: "JmFeaturedJobCards",
  components: { JmEditThisJob, JobCard },
  data() {
    return {
      job: "",
      editThisJob: false,
    };
  },
  methods: {
    setEditItem(selectedJob) {
      this.editThisJob = !this.editThisJob;
      this.job = selectedJob;
    },
  },
};
</script>

<style scoped></style>
