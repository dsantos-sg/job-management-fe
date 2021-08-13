<template>
  <v-app class="jm-main-background">
    <jm-main-header v-if="$store.getters.loginStatus" />
    <v-main class="my-10">
      <v-container class="fill-height">
        <jm-main-card v-if="$store.getters.loginStatus">
          <v-fade-transition mode="out-in">
            <router-view />
          </v-fade-transition>
        </jm-main-card>
        <v-fade-transition v-else>
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import JmMainHeader from "@/components/JmMainHeader/JmMainHeader";
import JmMainCard from "@/components/JmMainCard/JmMainCard";

export default {
  name: "App",
  components: {
    JmMainCard,
    JmMainHeader,
  },
  mounted() {
    this.$store.dispatch("loadJobsData");
  },
};
</script>
