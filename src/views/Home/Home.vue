<template>
  <v-container>
    <v-card-title class="justify-center my-5">
      <h2 class="font-weight-light">Overview</h2>
    </v-card-title>
    <jm-dashboard />
    <v-divider />
    <jm-carousel-job-cards class="hidden-sm-and-down" />
    <jm-featured-job-cards class="hidden-md-and-up" />
  </v-container>
</template>

<script>
import JmCarouselJobCards from "@/components/JmCarouselJobCards/JmCarouselJobCards";
import JmDashboard from "@/components/JmDashboard/JmDashboard";
import JmFeaturedJobCards from "@/components/JmFeaturedJobCards/JmFeaturedJobCards";

export default {
  name: "Home",
  components: {
    JmFeaturedJobCards,
    JmDashboard,
    JmCarouselJobCards,
  },
  methods: {
    setLogin() {
      this.$store.commit("SET_LOGIN");
    },
  },
  mounted() {
    this.setLogin();
  },
  beforeMount() {
    this.$store.dispatch("loadJobsData");
  },
};
</script>

<style scoped></style>
