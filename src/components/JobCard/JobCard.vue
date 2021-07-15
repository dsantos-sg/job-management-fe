<template>
  <v-card elevation="12" max-width="400">
    <v-container>
      <div flat class="d-flex">
        <h1 class="title text-ellipse">Technischer Produktdesigner (m/w)</h1>
        <v-spacer />
        <v-btn fab color="secondary" plain x-small to="#">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
      <div>
        <h1 class="subtitle-2 text--secondary">Sauerkraut Software GmbH</h1>
        <h1 class="caption">Porschestraße 1, 42279 Wuppertal</h1>
      </div>
      <div class="mt-1">
        <div class="d-flex">
          <h1 class="body-2">24km from home</h1>
          <v-spacer />
          <h1 class="body-2">Published: 3 weeks ago</h1>
        </div>
        <div class="d-flex align-center mt-1">
          <jm-priority-icons
            set-size="32"
            set-color="red"
            set-icon="mdi-arrow-top-right"
            set-icon-text-color="white"
          />
          <h1 class="overline ml-1">TOP</h1>
          <v-spacer />
          <v-rating
            v-model="rating"
            color="grey darken-3"
            background-color="grey darken-1"
            hover
            dense
          ></v-rating>
        </div>
      </div>
      <v-divider class="mt-2" />

      <div class="d-flex align-end mt-3">
        <div>
          <h1 class="display-1">NO</h1>
          <p>scheduled interviews</p>
        </div>
        <v-spacer />
        <div class="d-flex flex-column align-end">
          <h1 class="title">Not Available</h1>
          <p>Salary offer (year)</p>
        </div>
      </div>
      <jm-follow-up-overview-indicator />
      <jm-benefits-chips />
      <v-divider class="my-3" />
      <jm-tags-chips />
    </v-container>
  </v-card>
</template>

<script>
import JmPriorityIcons from "@/components/JmPriorityIcons/JmPriorityIcons";
import JmFollowUpOverviewIndicator from "@/components/JmFollowUpOverviewIndicator/JmFollowUpOverviewIndicator";
import JmBenefitsChips from "@/components/JmBenefitsChips/JmBenefitsChips";
import JmTagsChips from "@/components/JmTagsChips/JmTagsChips";
export default {
  name: "JobCard",
  components: {
    JmTagsChips,
    JmBenefitsChips,
    JmFollowUpOverviewIndicator,
    JmPriorityIcons,
  },
  data() {
    return {
      rating: 3,
    };
  },
};
</script>

<style scoped></style>
