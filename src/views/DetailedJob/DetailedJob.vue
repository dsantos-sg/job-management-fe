<template>
  <v-container>
    <jm-main-card>
      <v-card-title class="justify-center mb-5">
        <h2 class="font-weight-light">Detailed job</h2>
      </v-card-title>
      <jm-job-details />
    </jm-main-card>
  </v-container>
</template>

<script>
import JmJobDetails from "@/components/JmJobDetails/JmJobDetails";
import JmMainCard from "@/components/JmMainCard/JmMainCard";
export default {
  name: "DetailedJob",
  components: { JmMainCard, JmJobDetails },
};
</script>

<style scoped></style>
