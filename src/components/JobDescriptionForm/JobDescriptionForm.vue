<template>
  <v-card elevation="12" rounded="xl">
    <v-card-title>
      <h3 class="font-weight-light mx-auto">Job Description</h3>
    </v-card-title>
    <v-card-text class="pa-sm-3 pa-md-8 pa-lg-10 pa-xl-12">
      <v-text-field
        v-model="compJobTitle"
        label="Job title"
        rounded
        outlined
        clearable
      ></v-text-field>
      <v-text-field
        v-model="compJobCode"
        label="Code"
        rounded
        outlined
        clearable
      ></v-text-field>
      <v-text-field
        v-model="compJobLink"
        label="Link"
        rounded
        outlined
        clearable
      ></v-text-field>
      <!-- TODO check logic for icon change on priority control -->
      <jm-priority-control />
      <jm-set-date
        date-label="Publish Date"
        @getSelectedDate="jobDescription.publishDate = $event"
      />
      <jm-set-date
        date-label="Close Date"
        @getSelectedDate="jobDescription.closeDate = $event"
      />
      <v-textarea
        v-model="compJobDetail"
        outlined
        clearable
        auto-grow
        rounded
        rows="6"
        label="Job details"
      ></v-textarea>
      <v-textarea
        v-model="compJobRequirements"
        outlined
        clearable
        auto-grow
        rounded
        rows="6"
        label="Job requirements"
      ></v-textarea>
      <v-select
        v-model="compContractType"
        outlined
        clearable
        rounded
        label="Contract type"
        :items="contractTypeItems"
      ></v-select>
      <!-- TODO Check why $emit from chips not working properly -->
      <jm-combobox-chips
        combobox-label="Benefits"
        @chipsList="jobDescription.benefits = $event"
      />
      <!-- TODO Check why $emit from chips not working properly -->
      <jm-combobox-chips
        combobox-label="Tags"
        @chipsList="jobDescription.tags = $event"
      />
      <v-textarea
        v-model="compAdditionalInfos"
        outlined
        clearable
        auto-grow
        rounded
        rows="4"
        label="Additional infos"
      ></v-textarea>
    </v-card-text>
  </v-card>
</template>

<script>
import JmPriorityControl from "@/components/JmPriorityControl/JmPriorityControl";
import JmSetDate from "@/components/JmSetDate/JmSetDate";
import JmComboboxChips from "@/components/JmComboboxChips/JmComboboxChips";

export default {
  name: "JobDescriptionForm",
  props: ["selectedJob"],
  components: { JmComboboxChips, JmSetDate, JmPriorityControl },
  data() {
    return {
      contractTypeItems: ["Full time", "Partial Time", "Free-lance", "Others"],
      jobDescription: {
        jobTitle: "",
        jobCode: "",
        jobLink: "",
        priority: "",
        publishDate: "",
        closeDate: "",
        jobDetail: "",
        jobRequirements: "",
        contractType: "",
        benefits: [],
        tags: [],
        additionalInfos: "",
      },
    };
  },
  computed: {
    compJobTitle: {
      get() {
        return this.selectedJob.jobTitle;
      },
      set(val) {
        this.jobDescription.jobTitle = val;
      },
    },
    compJobCode: {
      get() {
        return this.selectedJob.jobCode;
      },
      set(val) {
        this.jobDescription.jobCode = val;
      },
    },
    compJobLink: {
      get() {
        return this.selectedJob.jobLink;
      },
      set(val) {
        this.jobDescription.jobLink = val;
      },
    },
    compPriority: {
      get() {
        return this.selectedJob.priority;
      },
      set(val) {
        this.jobDescription.priority = val;
      },
    },
    compPublishDate: {
      get() {
        return this.selectedJob.publishDate;
      },
      set(val) {
        this.jobDescription.publishDate = val;
      },
    },
    compCloseDate: {
      get() {
        return this.selectedJob.closeDate;
      },
      set(val) {
        this.jobDescription.closeDate = val;
      },
    },
    compJobDetail: {
      get() {
        return this.selectedJob.jobDetail;
      },
      set(val) {
        this.jobDescription.jobDetail = val;
      },
    },
    compJobRequirements: {
      get() {
        return this.selectedJob.jobRequirements;
      },
      set(val) {
        this.jobDescription.jobRequirements = val;
      },
    },
    compContractType: {
      get() {
        return this.selectedJob.contractType;
      },
      set(val) {
        this.jobDescription.contractType = val;
      },
    },
    compAdditionalInfos: {
      get() {
        return this.selectedJob.additionalInfos;
      },
      set(val) {
        this.jobDescription.additionalInfos = val;
      },
    },
  },
  methods: {
    updateWithEmit() {
      this.$emit("setJobDescription", this.jobDescription);
    },
  },
  updated() {
    this.updateWithEmit();
  },
};
</script>
