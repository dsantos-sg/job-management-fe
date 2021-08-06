<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(job, index) in $store.getters.jobItems"
        :key="index"
        sm="12"
        md="6"
        lg="4"
        xl="3"
      >
        <v-card
          ripple
          color="transparent"
          rounded="xl"
          flat
          @click="setEditItem(job)"
        >
          <job-card
            :job-title="job.jobDescription.jobTitle"
            :company="job.company.companyName"
            :company-address="job.company.geospatialData"
            :dist-from-home="job.company.distanceFromHome"
            :published-date="job.jobDescription.publishDate"
            :priority="job.jobDescription.priority"
            :rating="job.followUp.rating"
            scheduled-interviews="NO"
            :salary-offer="job.followUp.salaryOffer"
            overview="4"
            :benefits="job.jobDescription.benefits"
            :tags="job.jobDescription.tags"
          />
        </v-card>
      </v-col>
    </v-row>
    <jm-edit-this-job
      :selected-job="job"
      :set-edit-item="editThisJob"
      @setCloseDialog="editThisJob = $event"
    />
  </v-container>
</template>

<script>
import JobCard from "@/components/JobCard/JobCard";
import JmEditThisJob from "@/components/JmEditThisJob/JmEditThisJob";

export default {
  name: "JmRegisteredJobsCards",
  components: { JmEditThisJob, JobCard },
  data() {
    return {
      editThisJob: false,
      job: "",
    };
  },
  methods: {
    // selectedItem() {
    //   this.selectedCard = true; //TODO Change logic to give the selected by ID
    //   this.$emit("selectedItem", this.selectedCard);
    //   console.log(this.selectedCard);
    // },
    setEditItem(selectedJob) {
      this.editThisJob = !this.editThisJob;
      this.job = selectedJob;
    },
  },
};
</script>

<style scoped></style>
