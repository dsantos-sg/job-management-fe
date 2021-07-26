<template>
  <v-container>
    <jm-main-card>
      <v-card-title class="justify-center mb-5">
        <h2 class="font-weight-light">Settings</h2>
      </v-card-title>
      <jm-user-info-settings />
      <jm-style-settings />
    </jm-main-card>
  </v-container>
</template>

<script>
import JmMainCard from "@/components/JmMainCard/JmMainCard";
import JmUserInfoSettings from "@/components/JmUserInfoSettings/JmUserInfoSettings";
import JmStyleSettings from "@/components/JmStyleSettings/JmStyleSettings";
export default {
  name: "Settings",
  components: { JmStyleSettings, JmUserInfoSettings, JmMainCard },
};
</script>

<style scoped></style>
