<template>
  <div class="d-flex flex-column justify-center align-center my-10">
    <v-avatar color="primary" size="96">
      <v-icon size="64" color="white">{{ indicatorIcon }}</v-icon>
    </v-avatar>
    <h1 class="display-2 mt-3">14</h1>
    <h3 class="font-weight-light">{{ indicatorTitle }}</h3>
  </div>
</template>

<script>
export default {
  props: ["indicatorIcon", "indicatorTitle"],
  name: "JmSimpleIndicator",
};
</script>

<style scoped></style>
