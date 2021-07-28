<template>
  <v-app class="jm-main-background">
    <jm-main-header />
    <v-main class="my-10">
      <v-container class="fill-height">
        <jm-main-card>
          <v-fade-transition>
            <router-view />
          </v-fade-transition>
        </jm-main-card>
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
};
</script>
