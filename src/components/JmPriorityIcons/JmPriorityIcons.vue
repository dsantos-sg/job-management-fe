<template>
  <div>
    <v-avatar :size="setSize" class="elevation-1" :color="priorityColor">
      <v-icon :color="priorityTextColor">
        {{ priorityIcon }}
      </v-icon>
    </v-avatar>
  </div>
</template>

<script>
export default {
  name: "JmPriorityIcons",
  props: ["priority", "setSize"],
  data() {
    return {
      priorityColor: "",
      priorityIcon: "",
      priorityTextColor: "",
    };
  },
  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    priorityIconChange() {
      switch (this.priority) {
        case 0: {
          this.priorityColor = "white";
          this.priorityTextColor = "white";
          this.priorityIcon = "";
          break;
        }
        case 1: {
          this.priorityColor = "yellow";
          this.priorityTextColor = "grey darken-2";
          this.priorityIcon = "mdi-arrow-bottom-right";
          break;
        }
        case 2: {
          this.priorityColor = "orange";
          this.priorityTextColor = "white";
          this.priorityIcon = "mdi-arrow-right";
          break;
        }
        case 3: {
          this.priorityColor = "red";
          this.priorityTextColor = "white";
          this.priorityIcon = "mdi-arrow-top-right";
          break;
        }
        case 4: {
          this.priorityColor = "purple";
          this.priorityTextColor = "white";
          this.priorityIcon = "mdi-exclamation";
          break;
        }
      }
    },
  },
  mounted() {
    this.priorityIconChange();
  },
};
</script>

<style scoped></style>
