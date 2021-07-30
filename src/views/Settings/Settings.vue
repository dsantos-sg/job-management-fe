<template>
  <v-container>
    <v-card-title class="justify-center my-5">
      <h2 class="font-weight-light">Settings</h2>
    </v-card-title>
    <jm-user-info-settings />
    <jm-style-settings />
  </v-container>
</template>

<script>
import JmUserInfoSettings from "@/components/JmUserInfoSettings/JmUserInfoSettings";
import JmStyleSettings from "@/components/JmStyleSettings/JmStyleSettings";

export default {
  name: "Settings",
  components: { JmStyleSettings, JmUserInfoSettings },
};
</script>

<style scoped></style>
