<template>
  <v-chip-group show-arrows center-active>
    <v-chip v-for="(tag, index) in tags" :key="index">
      <v-avatar left>
        <v-icon>mdi-pound</v-icon>
      </v-avatar>
      {{ tag }}
    </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  name: "JmTagsChips",
  props: ["tags"],
};
</script>

<style scoped></style>
