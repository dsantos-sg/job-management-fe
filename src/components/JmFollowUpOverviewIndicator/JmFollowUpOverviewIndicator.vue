<template>
  <v-card flat class="my-5 d-flex align-center jus">
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab small v-bind="attrs" v-on="on" class="pa-3" color="info">
          <v-icon>mdi-text-box-check</v-icon>
        </v-btn>
      </template>
      <span
        >Registered job <br />
        on 32/02/2011</span
      >
    </v-tooltip>
    <v-divider />

    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab small v-bind="attrs" v-on="on" class="pa-3" color="info">
          <v-icon>mdi-file-send</v-icon>
        </v-btn>
      </template>
      <span>Application sent</span>
    </v-tooltip>
    <v-divider />

    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab small v-bind="attrs" v-on="on" class="pa-3" color="info">
          <v-icon>mdi-phone-incoming</v-icon>
        </v-btn>
      </template>
      <span>Application feedback</span>
    </v-tooltip>
    <v-divider />

    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          small
          v-bind="attrs"
          v-on="on"
          class="pa-3"
          color="secondary"
        >
          <v-icon>mdi-calendar-cursor</v-icon>
        </v-btn>
      </template>
      <span>Interview scheduled</span>
    </v-tooltip>
    <v-divider />

    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          small
          v-bind="attrs"
          v-on="on"
          class="pa-3"
          color="secondary"
        >
          <v-icon>mdi-account-question</v-icon>
        </v-btn>
      </template>
      <span>Final result</span>
    </v-tooltip>
  </v-card>
</template>

<script>
export default {
  name: "JmFollowUpOverviewIndicator",
};
</script>

<style scoped></style>
