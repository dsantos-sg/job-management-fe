<template>
  <div class="d-flex flex-column justify-center align-center my-10">
    <v-progress-circular
      width="12"
      color="primary"
      size="96"
      :value="progressValue"
    >
      <v-avatar color="primary" size="64">
        <v-icon size="32" color="white">{{ indicatorIcon }}</v-icon>
      </v-avatar>
    </v-progress-circular>
    <h1 class="display-2 mt-3">{{ indicatorValue }}</h1>
    <h3 class="font-weight-light">{{ indicatorTitle }}</h3>
  </div>
</template>

<script>
export default {
  props: ["progressValue", "indicatorIcon", "indicatorTitle", "indicatorValue"],
  name: "JmIconProgressIndicator",
};
</script>

<style scoped></style>
