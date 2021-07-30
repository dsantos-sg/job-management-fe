<template>
  <v-container>
    <v-row>
      <v-col
        sm="12"
        md="10"
        lg="8"
        xl="6"
        class="d-flex flex-column mx-auto mt-5"
      >
        <v-card elevation="10" rounded="xl">
          <v-card-title>Style</v-card-title>
          <v-container>
            <v-row>
              <v-col sm="12" md="4" lg="4">
                <v-switch label="Blue Sky mode"></v-switch>
              </v-col>
              <v-col sm="12" md="4" lg="4">
                <v-switch label="Light mode"></v-switch>
              </v-col>
              <v-col sm="12" md="4" lg="4">
                <v-switch label="Dark mode"></v-switch>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "JmStyleSettings",
};
</script>

<style scoped></style>
