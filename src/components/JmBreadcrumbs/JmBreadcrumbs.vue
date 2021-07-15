<template>
  <v-card dark flat color="transparent">
    <v-breadcrumbs
      dark
      :items="breadcrumbsItems"
      divider="|"
      class="pa-1 font-weight-light"
    ></v-breadcrumbs>
  </v-card>
</template>

<script>
export default {
  name: "JmBreadcrumbs",
  data() {
    //TODO Add states to Vuex
    return {
      breadcrumbsItems: [
        {
          text: "Add New Job",
          disable: false,
        },
        {
          text: "Mercedes Benz",
          disable: false,
        },
        {
          text: "Cad Designer XYZ",
          disable: false,
        },
      ],
    };
  },
};
</script>
