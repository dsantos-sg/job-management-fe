<template>
  <v-container>
    <jm-dashboard />
    <v-divider />
    <jm-carousel-job-cards />
  </v-container>
</template>

<script>
import JmCarouselJobCards from "@/components/JmCarouselJobCards/JmCarouselJobCards";
import JmDashboard from "@/components/JmDashboard/JmDashboard";

export default {
  name: "Home",
  components: {
    JmDashboard,
    JmCarouselJobCards,
  },
};
</script>

<style scoped></style>
