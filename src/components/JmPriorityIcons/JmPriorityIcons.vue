<template>
  <v-avatar :size="setSize" tile class="elevation-1" :color="setColor">
    <v-icon :color="setIconTextColor">
      {{ setIcon }}
    </v-icon>
  </v-avatar>
</template>

<script>
export default {
  name: "JmPriorityIcons",
  props: ["setSize", "setColor", "setIcon", "setIconTextColor"],
};
</script>

<style scoped></style>
