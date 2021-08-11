<template>
  <v-container fluid class="my-10">
    <v-card flat color="transparent">
      <v-card-title class="justify-center">
        <h2 class="font-weight-light">Featured jobs</h2>
      </v-card-title>
      <v-slide-group
        v-model="model"
        class="px-4"
        show-arrows
        center-active
        mandatory
        next-icon="mdi-arrow-right-box"
        prev-icon="mdi-arrow-left-box"
        value="0"
      >
        <v-slide-item
          v-for="(job, index) in $store.getters.jobItems"
          :key="index"
          v-slot="{}"
        >
          <v-card
            color="transparent"
            flat
            @click="setEditItem(job)"
            class="ma-8"
          >
            <v-row class="fill-height" align="center" justify="center">
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
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      <!--      <div v-for="(job, index) in $store.getters.jobItems" :key="index">-->
      <!--        {{ job.jobDescription.tags }}-->
      <!--      </div>-->
    </v-card>
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
  name: "JmCarouselJobCards",
  components: { JmEditThisJob, JobCard },
  data() {
    return {
      model: null,
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
