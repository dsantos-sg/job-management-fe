<template>
  <div class="d-flex flex-column justify-center align-center my-10">
    <v-progress-circular
      width="12"
      color="primary"
      size="96"
      :value="progressValue"
    >
      <h1>{{ indicatorValue }}</h1>
    </v-progress-circular>
    <h3 class="font-weight-light">{{ indicatorTitle }}</h3>
  </div>
</template>

<script>
export default {
  props: ["progressValue", "indicatorTitle", "indicatorValue"],
  name: "JmNumberProgressIndicator",
};
</script>

<style scoped></style>
