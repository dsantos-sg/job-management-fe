<template>
  <v-card flat color="transparent">
    <v-container>
      <v-card-title class="justify-center mb-5">
        <h2 class="font-weight-light">Overview</h2>
      </v-card-title>
      <v-row class="d-flex justify-center">
        <v-col xl="2" lg="2" md="2" sm="12">
          <jm-simple-indicator
            indicator-icon="mdi-text-box-check"
            indicator-title="Registered jobs"
          />
        </v-col>
        <v-col xl="2" lg="2" md="2" sm="12">
          <jm-icon-progress-indicator
            progress-value="30"
            indicator-title="Application sent"
            indicator-icon="mdi-file-send"
            indicator-value="9"
          />
        </v-col>
        <v-col xl="2" lg="2" md="2" sm="12">
          <jm-icon-progress-indicator
            progress-value="10"
            indicator-title="Company feedback"
            indicator-icon="mdi-phone-incoming"
            indicator-value="4"
          />
        </v-col>
        <v-col xl="2" lg="2" md="2" sm="12">
          <jm-icon-progress-indicator
            progress-value="15"
            indicator-title="Scheduled interview"
            indicator-icon="mdi-calendar-cursor"
            indicator-value="3"
          />
        </v-col>
        <v-col xl="2" lg="2" md="2" sm="12">
          <jm-icon-progress-indicator
            progress-value="30"
            indicator-title="Rejected application"
            indicator-icon="mdi-account-cancel"
            indicator-value="6"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-divider />
    <v-container class="my-10">
      <v-card-title class="justify-center">
        <h2 class="font-weight-light mt-5">Next interviews</h2>
      </v-card-title>
      <v-row>
        <v-col xl="4" lg="4" md="4" sm="12">
          <jm-number-progress-indicator
            progress-value="0"
            indicator-value="0"
            indicator-title="Tomorrow"
          />
        </v-col>
        <v-col xl="4" lg="4" md="4" sm="12">
          <jm-number-progress-indicator
            progress-value="40"
            indicator-value="2"
            indicator-title="This week"
          />
        </v-col>
        <v-col xl="4" lg="4" md="4" sm="12">
          <jm-number-progress-indicator
            progress-value="60"
            indicator-value="3"
            indicator-title="Next week"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import JmSimpleIndicator from "@/components/JmSimpleIndicator/JmSimpleIndicator";
import JmIconProgressIndicator from "@/components/JmIconProgressIndicator/JmIconProgressIndicator";
import JmNumberProgressIndicator from "@/components/JmNumberProgressIndicator/JmNumberProgressIndicator";
export default {
  name: "JmDashboard",
  components: {
    JmNumberProgressIndicator,
    JmIconProgressIndicator,
    JmSimpleIndicator,
  },
};
</script>

<style scoped></style>
