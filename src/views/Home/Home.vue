<template>
  <v-container>
    <jm-main-card>
      <jm-dashboard />
      <v-divider />
      <jm-carousel-job-cards />
    </jm-main-card>
  </v-container>
</template>

<script>
import JmCarouselJobCards from "@/components/JmCarouselJobCards/JmCarouselJobCards";
import JmDashboard from "@/components/JmDashboard/JmDashboard";
import JmMainCard from "@/components/JmMainCard/JmMainCard";
export default {
  name: "Home",
  components: {
    JmMainCard,
    JmDashboard,
    JmCarouselJobCards,
  },
};
</script>

<style scoped></style>
