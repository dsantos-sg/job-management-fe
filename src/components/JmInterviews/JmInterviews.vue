<template>
  <v-card flat>
    <v-card-title>Interview details</v-card-title>
    <v-card
      outlined
      v-for="(item, index) in interviews"
      :key="index"
      class="ma-1"
    >
      <v-card-title>
        Interview #{{ index + 1 }}
        <v-spacer />
        <v-btn fab plain @click.stop="removeThisInterview(index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-card outlined class="pa-4">
          <v-switch v-model="interviews[index].scheduled" label="Scheduled" />
          <v-datetime-picker
            label="Set interview date and time"
            v-model="interviews[index].interviewDateTime"
          >
          </v-datetime-picker>
          <v-text-field outlined label="Local" name="Local"> </v-text-field>
          <v-combobox
            v-model="interviews[index].participants"
            :items="interviews[index].contactFirstName"
            label="Participants"
            multiple
            chips
            outlined
          ></v-combobox>
          <v-textarea
            v-model="interviews[index].additionalInfos"
            outlined
            clearable
            label="Additional infos"
            name="AdditionalInfos"
          ></v-textarea>
        </v-card>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="primary" @click="addNewInterview">
          add a new interview
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
import VDatetimePicker from "@/components/DateTimePicker/DateTimePicker";
export default {
  name: "JmInterviews",
  components: { VDatetimePicker },
  data() {
    return {
      interviews: [
        {
          scheduled: "",
          interviewDateTime: "",
          address: "",
          participants: [],
          contactFirstName: ["kelly", "mike", "tina"],
          additionalInfos: "",
        },
      ],
    };
  },
  methods: {
    addNewInterview() {
      const newInterview = new Object();
      this.interviews.push(newInterview);
    },
    removeThisInterview(index) {
      alert("Remove this interview");
      this.contacts.splice(index, 1);
    },
  },
};
</script>

<style scoped></style>
