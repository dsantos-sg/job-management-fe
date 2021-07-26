<template>
  <v-container class="my-10">
    <v-card flat color="transparent">
      <v-card-title class="justify-center">
        <h2 class="font-weight-light">Featured jobs</h2>
      </v-card-title>
      <v-slide-group
        v-model="model"
        class="px-4"
        active-class="success"
        show-arrows
        center-active
        mandatory
        next-icon="mdi-arrow-right-box"
        prev-icon="mdi-arrow-left-box"
        value="4"
      >
        <v-slide-item
          class="green"
          v-for="n in totalCards"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? undefined : 'blue lighten-1'"
            class="ma-15"
            @click="toggle"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <job-card />
              </v-scale-transition>
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
