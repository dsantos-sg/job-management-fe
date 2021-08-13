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
    <v-app-bar app fixed flat dense height="100" dark class="bg-blur">
      <v-container fluid class="d-flex justify-space-between mt-n5">
        <jm-logo logo-size="400" logo-style="dark" />
        <jm-main-toolbar />
        <v-app-bar-nav-icon
          class="my-auto hidden-lg-and-up"
          @click.stop="drawer = !drawer"
        />
      </v-container>
      <template v-slot:extension>
        <v-container fluid>
          <v-row>
            <v-col sm="12" md="8" lg="4" xl="3" class="mx-auto">
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
import JmSearchItems from "@/components/JmSearchItems/JmSearchItems";

export default {
  name: "JmMainHeader",
  components: {
    JmSearchItems,
    JmMainToolbar,
    JmLogo,
  },
  data() {
    return {
      drawer: false,
      loggedIn: true,
    };
  },
};
</script>

<style scoped></style>
