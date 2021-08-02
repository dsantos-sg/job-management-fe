<template>
  <v-chip-group show-arrows center-active>
    <v-chip v-for="(benefit, index) in benefits" :key="index">
      <v-avatar left>
        <v-icon>mdi-check</v-icon>
      </v-avatar>
      {{ benefit }}
    </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  name: "JmBenefitsChips",
  props: ["benefits"],
};
</script>

<style scoped></style>
