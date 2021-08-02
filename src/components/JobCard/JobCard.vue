<template>
  <v-card outlined elevation="10" rounded="xl" width="350" height="480">
    <v-container>
      <div flat class="d-flex">
        <h1 class="title text-ellipse">{{ jobTitle }}</h1>
        <v-spacer />
        <v-btn fab color="secondary" plain x-small to="#">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
      <div>
        <h1 class="subtitle-2 text--secondary">{{ company }}</h1>
        <h1 class="caption">{{ companyAddress }}</h1>
      </div>
      <div class="mt-1">
        <div class="d-flex">
          <h1 class="body-2">{{ distFromHome }} km from home</h1>
          <v-spacer />
          <h1 class="body-2">{{ publishedDate }} $PublishedDate$</h1>
        </div>
        <div class="d-flex align-center mt-1">
          <jm-priority-icons
            :priority="priority"
            set-size="24"
            set-color="red"
            set-icon="mdi-arrow-top-right"
            set-icon-text-color="white"
          />
          <h1 class="body-1 ml-1" v-if="priority === 4">TOP</h1>
          <h1 class="body-1 ml-1" v-if="priority === 3">High</h1>
          <h1 class="body-1 ml-1" v-if="priority === 2">Medium</h1>
          <h1 class="body-1 ml-1" v-if="priority === 1">Low</h1>
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
          <h1 class="display-1">{{ scheduledInterviews }}</h1>
          <p>scheduled interviews</p>
        </div>
        <v-spacer />
        <div class="d-flex flex-column align-end">
          <h1 class="title">{{ salaryOffer }}</h1>
          <p>Salary offer (year)</p>
        </div>
      </div>
      <jm-follow-up-overview-indicator />
      <jm-benefits-chips :benefits="benefits" />
      <v-divider class="my-3" />
      <jm-tags-chips :tags="tags" />
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
  props: [
    "jobTitle",
    "company",
    "companyAddress",
    "distFromHome",
    "publishedDate",
    "priority",
    "rating",
    "scheduledInterviews",
    "salaryOffer",
    "overview",
    "benefits",
    "tags",
  ],
  components: {
    JmTagsChips,
    JmBenefitsChips,
    JmFollowUpOverviewIndicator,
    JmPriorityIcons,
  },
};
</script>
