<template>
  <v-app class="jm-main-background">
    <jm-main-header v-if="loggedIn" />
    <v-main class="my-10">
      <v-container class="fill-height">
        <jm-main-card v-if="loggedIn">
          <v-fade-transition>
            <router-view />
          </v-fade-transition>
        </jm-main-card>
        <v-fade-transition v-else>
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-main>
    <jm-main-app-footer />
  </v-app>
</template>

<script>
import JmMainAppFooter from "@/components/JmMainAppFooter/JmMainAppFooter";
import JmMainHeader from "@/components/JmMainHeader/JmMainHeader";
import JmMainCard from "@/components/JmMainCard/JmMainCard";

export default {
  name: "App",
  components: {
    JmMainCard,
    JmMainHeader,
    JmMainAppFooter,
  },
  data() {
    return {
      loggedIn: true,
    };
  },
};
</script>
