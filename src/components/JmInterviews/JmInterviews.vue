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
        <v-card
          elevation="10"
          rounded="xl"
          class="mb-8"
          v-for="(item, index) in interviews"
          :key="index"
        >
          <v-card-title>
            <h3 class="font-weight-light">Interview #{{ index + 1 }}</h3>
            <v-spacer />
            <v-btn fab plain @click.stop="removeThisInterview(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-switch v-model="interviews[index].scheduled" label="Scheduled" />
            <v-datetime-picker
              label="Set interview date and time"
              v-model="interviews[index].interviewDateTime"
            >
            </v-datetime-picker>
            <v-text-field
              outlined
              rounded
              label="Local"
              name="Local"
              clearable
            ></v-text-field>
            <v-combobox
              v-model="interviews[index].participants"
              :items="interviews[index].contactFirstName"
              label="Participants"
              multiple
              rounded
              chips
              outlined
              clearable
            ></v-combobox>
            <v-textarea
              v-model="interviews[index].additionalInfos"
              outlined
              rounded
              clearable
              rows="4"
              label="Additional infos"
              name="AdditionalInfos"
            ></v-textarea>
          </v-card-text>
        </v-card>
        <v-card-actions class="justify-center mb-5">
          <v-btn
            color="secondary"
            large
            rounded
            min-width="250"
            @click="addNewInterview"
          >
            add a new interview
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
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
