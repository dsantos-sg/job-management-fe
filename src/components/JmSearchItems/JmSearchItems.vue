<template>
  <v-form onsubmit="prevent()">
    <v-text-field
      rounded
      dark
      outlined
      solo-inverted
      clearable
      placeholder="Search..."
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  name: "JmSearchItems",
};
</script>

<style scoped></style>
