<template>
  <v-container>
    <v-row>
      <v-col cols="6" class="mx-auto">
        <v-card
          dark
          flat
          color="transparent"
          class="d-flex flex-column align-center"
        >
          <jm-logo class="logo-font" />
          <v-card-title>
            <h4 class="font-weight-light">
              Helps you organize your search for new jobs.
            </h4>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" width="300" large flat to="/login">
              Start here...
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import JmLogo from "@/components/JmLogo/JmLogo";
export default {
  name: "LandingPage",
  components: { JmLogo },
};
</script>

<style scoped></style>
