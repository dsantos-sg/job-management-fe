<template>
  <v-container class="my-10">
    <v-card flat color="transparent">
      <v-card-title class="justify-center">
        <h2 class="font-weight-light">Featured jobs</h2>
      </v-card-title>
      <v-slide-group
        v-model="model"
        class="px-4"
        show-arrows
        center-active
        mandatory
        next-icon="mdi-arrow-right-box"
        prev-icon="mdi-arrow-left-box"
        value="4"
      >
        <v-slide-item
          v-for="n in totalCards"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <v-card color="transparent" flat @click="toggle" class="ma-8">
            <v-row class="fill-height" align="center" justify="center">
              <job-card />
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-card>
  </v-container>
</template>

<script>
import JobCard from "@/components/JobCard/JobCard";

export default {
  name: "JmCarouselJobCards",
  components: { JobCard },
  data() {
    return {
      model: null,
      model2: 0,
      model3: 0,
      totalCards: 10,
      onboarding: 0,
    };
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
  },
};
</script>

<style scoped></style>
