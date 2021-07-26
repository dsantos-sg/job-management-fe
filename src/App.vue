<template>
  <v-app class="jm-main-background">
    <v-container class="fill-height" fluid>
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
          <jm-logo />
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
      <v-main class="my-10">
        <v-container>
          <!--          <jm-main-card>-->
          <v-fade-transition mode="out-in">
            <router-view />
          </v-fade-transition>
          <!--          </jm-main-card>-->
        </v-container>
      </v-main>
      <jm-main-app-footer />
    </v-container>
  </v-app>
</template>

<script>
import JmBreadcrumbs from "@/components/JmBreadcrumbs/JmBreadcrumbs";
import JmSearchItems from "@/components/JmSearchItems/JmSearchItems";
import JmMainToolbar from "@/components/JmMainToolbar/JmMainToolbar";
import JmLogo from "@/components/JmLogo/JmLogo";
// import JmMainCard from "@/components/JmMainCard/JmMainCard";
import JmMainAppFooter from "@/components/JmMainAppFooter/JmMainAppFooter";
export default {
  name: "App",
  components: {
    JmMainAppFooter,
    // JmMainCard,
    JmLogo,
    JmMainToolbar,
    JmSearchItems,
    JmBreadcrumbs,
  },
  data() {
    return {
      drawer: false,
      loggedIn: true,
    };
  },
};
</script>
