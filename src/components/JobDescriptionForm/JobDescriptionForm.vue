<template>
  <v-card flat>
    <v-card-title>Add the job description</v-card-title>
    <v-card-text>
      <v-text-field
        label="Title"
        placeholder="Title"
        outlined
        clearable
      ></v-text-field>
      <v-text-field
        label="Code"
        placeholder="Code"
        outlined
        clearable
      ></v-text-field>
      <v-text-field
        label="Link"
        placeholder="Link"
        outlined
        clearable
      ></v-text-field>
      <jm-priority-control />
      <jm-set-date date-label="Publish Date" />
      <jm-set-date date-label="Close Date" />
      <v-select
        outlined
        clearable
        v-model="contractType"
        label="Contract type"
        :items="contractTypeItems"
      ></v-select>
      <jm-combobox-chips combobox-label="Benefits" />
      <jm-combobox-chips combobox-label="Tags" />
      <v-textarea
        outlined
        clearable
        auto-grow
        rows="5"
        label="Additional infos"
        name="AdditionalInfos"
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
  components: { JmComboboxChips, JmSetDate, JmPriorityControl },
  data() {
    return {
      contractType: "",
      contractTypeItems: ["Full time", "Partial Time", "Free-lance", "Others"],
      benefits: "",
      tags: "",
    };
  },
};
</script>

<style scoped></style>
