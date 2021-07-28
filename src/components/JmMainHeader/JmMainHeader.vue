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
    <v-app-bar app prominent fixed flat dark class="bg-blur">
      <jm-logo logo-size="400" logo-style="dark" />
      <v-spacer />
      <jm-main-toolbar />
      <v-app-bar-nav-icon
        class="my-auto hidden-lg-and-up"
        @click.stop="drawer = !drawer"
      />
      <template v-slot:extension>
        <v-container fluid>
          <v-row>
            <v-col class="mt-sm-n12" sm="12" md="3">
              <JmBreadcrumbs />
            </v-col>
            <v-col class="mt-sm-n4 px-16" sm="12" md="6">
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
