<template>
  <v-container>
    <v-row>
      <v-col v-for="n in totalCards" :key="n" cols="4">
        <v-item-group>
          <v-item v-slot="{ active, toggle }">
            <v-card to="/job-detail" @click="selectedItem">
              <v-card :color="active ? 'primary' : ''" @click="toggle">
                <job-card />
              </v-card>
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
