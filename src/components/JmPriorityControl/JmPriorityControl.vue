<template>
  <v-alert outlined rounded="xl" color="grey" class="mb-7">
    <!-- TODO Remover item -->
    <v-card outlined color="transparent">
      <h1 class="body-1">Priority</h1>
      <div class="d-flex mt-3">
        <jm-priority-icons
          set-size="40"
          :set-color="priorityColor"
          :set-icon="priorityIcon"
          :set-icon-text-color="priorityTextColor"
        />
        <v-slider
          v-model="priority"
          :max="4"
          color="grey darken-4"
          light
          step="1"
          ticks="always"
          tick-size="4"
          class="mx-3"
          track-color="grey lighten-1"
          :tick-labels="priorityItems"
          @change="priorityChange"
        >
        </v-slider>
      </div>
    </v-card>
  </v-alert>
</template>

<script>
import JmPriorityIcons from "@/components/JmPriorityIcons/JmPriorityIcons";
export default {
  name: "JmPriorityControl",
  components: { JmPriorityIcons },
  data() {
    return {
      priority: "",
      priorityColor: "",
      priorityTextColor: "",
      priorityIcon: "",
      priorityItems: ["none", "low", "medium", "high", "TOP"],
    };
  },
  methods: {
    priorityChange() {
      console.log(this.priority);
      switch (this.priority) {
        case 0: {
          this.priorityColor = "white";
          this.priorityTextColor = "white";
          this.priorityIcon = "";
          console.log("0");
          break;
        }
        case 1: {
          this.priorityColor = "yellow";
          this.priorityTextColor = "grey darken-2";
          this.priorityIcon = "mdi-arrow-bottom-right";
          console.log("1" + this.priorityColor + " " + this.priorityIcon);
          break;
        }
        case 2: {
          this.priorityColor = "orange";
          this.priorityTextColor = "white";
          this.priorityIcon = "mdi-arrow-right";
          console.log("2" + this.priorityColor + " " + this.priorityIcon);
          break;
        }
        case 3: {
          this.priorityColor = "red";
          this.priorityTextColor = "white";
          this.priorityIcon = "mdi-arrow-top-right";
          console.log("3" + this.priorityColor + " " + this.priorityIcon);
          break;
        }
        case 4: {
          this.priorityColor = "purple";
          this.priorityTextColor = "white";
          this.priorityIcon = "mdi-exclamation";
          console.log("4" + this.priorityColor + " " + this.priorityIcon);
          break;
        }
        default: {
          console.log("Nothing");
        }
      }
    },
  },
};
</script>

<style scoped></style>
