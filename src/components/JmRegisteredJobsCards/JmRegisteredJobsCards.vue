<template>
  <v-container>
    <v-row>
      <v-col v-for="n in totalCards" :key="n" sm="12" md="6" lg="4" xl="3">
        <v-item-group>
          <v-item v-slot="{ active, toggle }">
            <v-card
              color="transparent"
              rounded="xl"
              flat
              @click="toggle"
              to="/job-detail"
            >
              <job-card />
            </v-card>
          </v-item>
        </v-item-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import JobCard from "@/components/JobCard/JobCard";

export default {
  name: "JmRegisteredJobsCards",
  components: { JobCard },
  data() {
    return {
      totalCards: 13,
      selectedCard: "",
    };
  },
  methods: {
    selectedItem() {
      this.selectedCard = true; //TODO Change logic to give the selected by ID
      this.$emit("selectedItem", this.selectedCard);
      console.log(this.selectedCard);
    },
  },
};
</script>

<style scoped></style>
