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
                v-model="newJobDescription.jobTitle"
                label="Job title"
                rounded
                outlined
                clearable
                @blur="updateWithEmit"
              ></v-text-field>
              <v-text-field
                v-model="newJobDescription.jobCode"
                label="Code"
                rounded
                outlined
                clearable
                @blur="updateWithEmit"
              ></v-text-field>
              <v-text-field
                v-model="newJobDescription.jobLink"
                label="Link"
                rounded
                outlined
                clearable
                @blur="updateWithEmit"
              ></v-text-field>
              <!-- TODO check logic for icon change on priority control -->
              <jm-priority-control />
              <jm-set-date
                date-label="Publish Date"
                @getSelectedDate="newJobDescription.publishDate = $event"
              />
              <jm-set-date
                date-label="Close Date"
                @getSelectedDate="newJobDescription.closeDate = $event"
              />
              <v-textarea
                v-model="newJobDescription.jobDetail"
                outlined
                clearable
                auto-grow
                rounded
                rows="6"
                label="Job details"
                name="jobDetails"
                @blur="updateWithEmit"
              ></v-textarea>
              <v-textarea
                v-model="newJobDescription.jobRequirements"
                outlined
                clearable
                auto-grow
                rounded
                rows="6"
                label="Job requirements"
                name="jobRequirements"
                @blur="updateWithEmit"
              ></v-textarea>
              <v-select
                v-model="newJobDescription.contractType"
                outlined
                clearable
                rounded
                label="Contract type"
                :items="contractTypeItems"
                @blur="updateWithEmit()"
              ></v-select>
              <!-- TODO Check why $emit from chips not working properly -->
              <jm-combobox-chips
                combobox-label="Benefits"
                @chipsList="newJobDescription.benefits = $event"
              />
              <!-- TODO Check why $emit from chips not working properly -->
              <jm-combobox-chips
                combobox-label="Tags"
                @chipsList="newJobDescription.tags = $event"
              />
              <v-textarea
                v-model="newJobDescription.additionalInfos"
                outlined
                clearable
                auto-grow
                rounded
                rows="4"
                label="Additional infos"
                name="AdditionalInfos"
                @blur="updateWithEmit"
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
  props: ["selectedJobDescription", "updateThisJob"],
  components: { JmComboboxChips, JmSetDate, JmPriorityControl },
  data() {
    return {
      contractType: "",
      contractTypeItems: ["Full time", "Partial Time", "Free-lance", "Others"],
      benefits: "",
      tags: "",
      newJobDescription: {
        jobTitle: "",
        jobCode: "",
        jobLink: "",
        priority: "",
        publishDate: "",
        closeDate: "",
        jobDetail: "",
        jobRequirements: "",
        contractType: "",
        benefits: [null],
        tags: [null],
        additionalInfos: "",
      },
    };
  },
  methods: {
    updateWithEmit() {
      this.$emit("setNewJobDescription", this.newJobDescription);
    },
    updateJob() {
      if (this.updateThisJob) {
        this.newJobDescription = this.selectedJobDescription;
      }
    },
  },
  beforeMount() {
    this.updateJob();
  },
  // beforeCreate() {
  //   this.updateJob();
  // },
  // beforeUpdate() {
  //   this.updateJob();
  // },
};
</script>
