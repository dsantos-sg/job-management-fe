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

        <!--        Only for connection test-->
        <!--        <v-card-->
        <!--          v-for="(job, i) in $store.getters.jobItems"-->
        <!--          :key="i"-->
        <!--          class="pa-10 ma-10"-->
        <!--          elevation="12"-->
        <!--          color="success"-->
        <!--        >-->
        <!--          {{ job }}-->
        <!--        </v-card>-->
        <!--        &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
      </v-container>
    </v-main>
    <!--    <jm-main-app-footer />-->
  </v-app>
</template>

<script>
// import { mapState } from "vuex";
// import JmMainAppFooter from "@/components/JmMainAppFooter/JmMainAppFooter";
import JmMainHeader from "@/components/JmMainHeader/JmMainHeader";
import JmMainCard from "@/components/JmMainCard/JmMainCard";

export default {
  name: "App",
  components: {
    JmMainCard,
    JmMainHeader,
    // JmMainAppFooter,
  },
  mounted() {
    this.$store.dispatch("loadJobsData");
  },
  // computed: {
  //   ...mapState(["jobs"]),
  // },
};
</script>
