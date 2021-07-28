<template>
  <v-container>
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
