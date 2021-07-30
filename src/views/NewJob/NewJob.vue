<template>
  <v-container>
    <v-card-title class="justify-center my-5">
      <h2 class="font-weight-light">Add a new job</h2>
    </v-card-title>
    <jm-new-job-infos />
  </v-container>
</template>

<script>
import JmNewJobInfos from "@/components/JmNewJobInfos/JmNewJobInfos";

export default {
  name: "NewJob",
  components: {
    JmNewJobInfos,
  },
  data() {
    return {
      tab: "",
    };
  },
};
</script>

<style scoped></style>
