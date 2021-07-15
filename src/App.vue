<template>
  <v-app class="jm-main-background">
    <v-container fluid>
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
      <v-app-bar app fixed flat dark color="transparent" class="bg-blur">
        <jm-logo />
        <v-spacer />
        <jm-main-toolbar />
        <v-app-bar-nav-icon
          class="my-auto hidden-lg-and-up"
          @click.stop="drawer = !drawer"
        />
      </v-app-bar>
      <v-main class="mb-10">
        <div>
          <JmBreadcrumbs class="my-1" />
          <v-divider dark />
        </div>
        <v-row class="d-flex justify-center mt-3">
          <v-col xl="4" lg="6" md="12">
            <JmSearchItems />
          </v-col>
        </v-row>
        <v-row>
          <v-fade-transition mode="out-in">
            <v-container>
              <jm-main-card>
                <router-view />
              </jm-main-card>
            </v-container>
          </v-fade-transition>
        </v-row>
      </v-main>
      <jm-main-app-footer  />
    </v-container>
  </v-app>
</template>

<script>
import JmBreadcrumbs from "@/components/JmBreadcrumbs/JmBreadcrumbs";
import JmSearchItems from "@/components/JmSearchItems/JmSearchItems";
import JmMainToolbar from "@/components/JmMainToolbar/JmMainToolbar";
import JmLogo from "@/components/JmLogo/JmLogo";
import JmMainCard from "@/components/JmMainCard/JmMainCard";
import JmMainAppFooter from "@/components/JmMainAppFooter/JmMainAppFooter";
export default {
  name: "App",
  components: {
    JmMainAppFooter,
    JmMainCard,
    JmLogo,
    JmMainToolbar,
    JmSearchItems,
    JmBreadcrumbs,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
