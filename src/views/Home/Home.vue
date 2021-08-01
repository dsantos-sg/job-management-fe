<template>
  <v-container>
    <v-card-title class="justify-center my-5">
      <h2 class="font-weight-light">Overview</h2>
    </v-card-title>
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
  methods: {
    setLogin() {
      this.$store.commit("SET_LOGIN");
    },
  },
  mounted() {
    this.setLogin();
  },
};
</script>

<style scoped></style>
