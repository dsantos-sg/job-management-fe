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
            <v-text-field
              label="Title"
              placeholder="Title"
              rounded
              outlined
              clearable
            ></v-text-field>
            <v-text-field
              label="Code"
              placeholder="Code"
              rounded
              outlined
              clearable
            ></v-text-field>
            <v-text-field
              label="Link"
              placeholder="Link"
              rounded
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
              rounded
              label="Contract type"
              :items="contractTypeItems"
            ></v-select>
            <jm-combobox-chips combobox-label="Benefits" />
            <jm-combobox-chips combobox-label="Tags" />
            <v-textarea
              outlined
              clearable
              auto-grow
              rounded
              rows="4"
              label="Additional infos"
              name="AdditionalInfos"
            ></v-textarea>
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
