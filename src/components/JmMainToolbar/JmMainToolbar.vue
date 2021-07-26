<template>
  <div class="d-flex">
    <v-tabs
      v-model="tab"
      background-color="transparent"
      class="hidden-md-and-down"
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1" to="/home">
        Home
        <v-icon>mdi-home</v-icon>
      </v-tab>

      <v-tab href="#tab-2" to="/new">
        Add a new job
        <v-icon>mdi-plus-box</v-icon>
      </v-tab>

      <v-tab href="#tab-3" to="/registered-jobs">
        Registered jobs
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-tab>
      <v-tab href="#tab-4" to="/settings">
        Settings
        <v-icon>mdi-cog</v-icon>
      </v-tab>
      <v-tab href="#tab-5" to="/about">
        About
        <v-icon>mdi-information</v-icon>
      </v-tab>
      <v-tab href="#tab-6" to="/">
        Logout
        <v-icon>mdi-exit-to-app</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
        <!--        <v-card flat>-->
        <!--          <v-card-text>{{ text }}</v-card-text>-->
        <!--        </v-card>-->
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "JmMainToolbar",
  data() {
    return {
      tab: "",
    };
  },
};
</script>

<style scoped></style>
