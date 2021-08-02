<template>
  <header v-if="loggedIn">
    <v-navigation-drawer
      app
      right
      color="transparent"
      absolute
      dark
      temporary
      v-model="drawer"
      width="80%"
      class="bg-blur"
    >
    </v-navigation-drawer>
    <v-app-bar app fixed flat dense height="80" dark class="bg-blur">
      <jm-logo logo-size="400" logo-style="dark" />
      <v-spacer />
      <jm-main-toolbar />
      <v-app-bar-nav-icon
        class="my-auto hidden-lg-and-up"
        @click.stop="drawer = !drawer"
      />
      <template v-slot:extension>
        <v-container fluid class="mt-5">
          <v-row>
            <v-col cols="8" class="d-flex justify-start">
              <JmBreadcrumbs />
            </v-col>
            <v-col cols="4" class="">
              <JmSearchItems />
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-app-bar>
  </header>
</template>

<script>
import JmLogo from "@/components/JmLogo/JmLogo";
import JmMainToolbar from "@/components/JmMainToolbar/JmMainToolbar";
import JmBreadcrumbs from "@/components/JmBreadcrumbs/JmBreadcrumbs";
import JmSearchItems from "@/components/JmSearchItems/JmSearchItems";

export default {
  name: "JmMainHeader",
  components: { JmSearchItems, JmBreadcrumbs, JmMainToolbar, JmLogo },
  data() {
    return {
      drawer: false,
      loggedIn: true,
    };
  },
};
</script>

<style scoped></style>
