<template>
  <v-card class="ma-5" flat>
    <v-card-title>Style</v-card-title>
    <v-container>
      <v-row>
        <v-col sm="12" md="3" lg="2">
          <v-switch label="Blue Sky mode"></v-switch>
        </v-col>
        <v-col sm="12" md="3" lg="2">
          <v-switch label="Light mode"></v-switch>
        </v-col>
        <v-col sm="12" md="3" lg="2">
          <v-switch label="Dark mode"></v-switch>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "JmStyleSettings",
};
</script>

<style scoped></style>
