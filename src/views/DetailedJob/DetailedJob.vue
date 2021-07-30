<template>
  <v-container>
    <v-card-title class="justify-center my-5">
      <h2 class="font-weight-light">Detailed job</h2>
    </v-card-title>
    <jm-job-details />
  </v-container>
</template>

<script>
import JmJobDetails from "@/components/JmJobDetails/JmJobDetails";

export default {
  name: "DetailedJob",
  components: { JmJobDetails },
};
</script>

<style scoped></style>
