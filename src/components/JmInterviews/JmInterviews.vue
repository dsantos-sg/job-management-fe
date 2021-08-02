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
          v-for="(item, index) in newJobInterviews.interviews"
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
            <v-switch
              v-model="newJobInterviews.interviews[index].scheduled"
              label="Scheduled"
              @blur="updateWithEmit"
            />
            <v-datetime-picker
              label="Set interview date and time"
              v-model="newJobInterviews.interviews[index].interviewDateTime"
            >
            </v-datetime-picker>
            <v-text-field
              outlined
              rounded
              label="Local"
              name="Local"
              clearable
              @blur="updateWithEmit"
            ></v-text-field>
            <v-combobox
              v-model="newJobInterviews.interviews[index].participants"
              :items="newJobInterviews.interviews[index].contactFirstName"
              label="Participants"
              multiple
              rounded
              chips
              outlined
              clearable
              @blur="updateWithEmit"
            ></v-combobox>
            <v-textarea
              v-model="newJobInterviews.interviews[index].additionalInfos"
              outlined
              rounded
              clearable
              rows="4"
              label="Additional infos"
              name="AdditionalInfos"
              @blur="updateWithEmit"
              auto-grow
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
      newJobInterviews: {
        interviews: [
          {
            scheduled: "",
            interviewDateTime: "",
            geospatialData: {
              type: "Point",
              coordinates: [48.69548, 8.99777],
            },
            participants: [],
            contactFirstName: ["kelly", "mike", "tina"],
            additionalInfos: "",
          },
        ],
      },
    };
  },
  methods: {
    addNewInterview() {
      const newInterview = {};
      this.newJobInterviews.interviews.push(newInterview);
    },
    removeThisInterview(index) {
      alert("Remove this interview");
      this.contacts.splice(index, 1);
    },
    updateWithEmit() {
      this.$emit("setNewJobInterviews", this.newJobInterviews);
      console.log("job interview emit");
    },
  },
};
</script>

<style scoped></style>
