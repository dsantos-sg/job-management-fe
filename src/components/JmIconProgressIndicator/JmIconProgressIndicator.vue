<template>
  <div class="d-flex flex-column justify-center align-center my-10">
    <v-progress-circular width="12" color="primary" size="96" :value="20">
      <v-avatar color="primary" size="64">
        <v-icon size="32" color="white">mdi-text-box-check</v-icon>
      </v-avatar>
    </v-progress-circular>
    <h1 class="display-2 mt-3">9</h1>
    <h3 class="font-weight-light">Application sent</h3>
  </div>
</template>

<script>
export default {
  name: "JmIconProgressIndicator"
};
</script>

<style scoped>

</style>