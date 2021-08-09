<template>
  <v-container>
    <v-row>
      <v-col
        sm="12"
        md="10"
        lg="8"
        xl="6"
        class="d-flex flex-column mx-auto mt-5"
      >
        <v-card elevation="10" rounded="xl">
          <v-card-text class="mt-3">
            <v-form ref="jobDescription">
              <v-text-field
                :value="jobDescription.jobTitle"
                label="Job title"
                rounded
                outlined
                clearable
                @input="updateJobTitle"
              ></v-text-field>
              <v-text-field
                :value="jobDescription.jobCode"
                label="Code"
                rounded
                outlined
                clearable
                @input="updateJobCode"
              ></v-text-field>
              <v-text-field
                :value="jobDescription.jobLink"
                label="Link"
                rounded
                outlined
                clearable
                @input="updateJobLink"
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
                :value="jobDescription.jobDetail"
                outlined
                clearable
                auto-grow
                rounded
                rows="6"
                label="Job details"
                @input="updateJobDetail"
              ></v-textarea>
              <v-textarea
                :value="jobDescription.jobRequirements"
                outlined
                clearable
                auto-grow
                rounded
                rows="6"
                label="Job requirements"
                @input="updateJobRequirements"
              ></v-textarea>
              <v-select
                :value="jobDescription.contractType"
                outlined
                clearable
                rounded
                label="Contract type"
                :items="contractTypeItems"
                @input="updateContractType"
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
                :value="jobDescription.additionalInfos"
                outlined
                clearable
                auto-grow
                rounded
                rows="4"
                label="Additional infos"
                name="AdditionalInfos"
                @input="updateAdditionalInfos"
              ></v-textarea>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import JmPriorityControl from "@/components/JmPriorityControl/JmPriorityControl";
import JmSetDate from "@/components/JmSetDate/JmSetDate";
import JmComboboxChips from "@/components/JmComboboxChips/JmComboboxChips";

export default {
  name: "JobDescriptionForm",
  props: ["selectedJob", "updateThisJob"],
  components: { JmComboboxChips, JmSetDate, JmPriorityControl },
  data() {
    return {
      contractTypeItems: ["Full time", "Partial Time", "Free-lance", "Others"],
      jobDescription: {
        jobTitle: this.selectedJob.jobTitle,
        jobCode: this.selectedJob.jobCode,
        jobLink: this.selectedJob.jobLink,
        priority: this.selectedJob.priority,
        publishDate: "",
        closeDate: "",
        jobDetail: this.selectedJob.jobDetail,
        jobRequirements: this.selectedJob.jobRequirements,
        contractType: this.selectedJob.contractType,
        benefits: [null],
        tags: [null],
        additionalInfos: this.selectedJob.additionalInfos,
      },
    };
  },
  methods: {
    updateWithEmit() {
      this.$emit("setJobDescription", this.jobDescription);
    },

    updateJobTitle(e) {
      this.jobDescription.jobTitle = e;
      this.updateWithEmit();
    },
    updateJobCode(e) {
      this.jobDescription.jobCode = e;
      this.updateWithEmit();
    },
    updateJobLink(e) {
      this.jobDescription.jobLink = e;
      this.updateWithEmit();
    },
    updateJobDetail(e) {
      this.jobDescription.jobDetail = e;
      this.updateWithEmit();
    },
    updateJobRequirements(e) {
      this.jobDescription.jobRequirements = e;
      this.updateWithEmit();
    },
    updateContractType(e) {
      this.jobDescription.contractType = e;
      this.updateWithEmit();
    },
    updateAdditionalInfos(e) {
      this.jobDescription.additionalInfos = e;
      this.updateWithEmit();
    },
  },
  // mounted() {
  //   this.updateAll();
  // },
};
</script>
