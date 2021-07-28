<template>
  <v-container>
    <v-toolbar color="transparent" dense flat>
      <v-btn-toggle dense group tile borderless mandatory>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" @click="setGridView">
              <v-icon>mdi-view-grid</v-icon>
            </v-btn>
          </template>
          <span>Grid view</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" @click="setListView">
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-btn>
          </template>
          <span>List view</span>
        </v-tooltip>
      </v-btn-toggle>
      <v-spacer />
      <div class="mr-3">
        <span v-if="sortList" class="black--text">A-Z</span>
        <span v-if="!sortList" class="black--text">Z-A</span>
      </div>
      <v-btn-toggle dense group tile borderless mandatory>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" @click="sortToggle">
              <v-icon>mdi-tools</v-icon>
            </v-btn>
          </template>
          <span>Sort by job title</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" @click="sortToggle">
              <v-icon>mdi-factory</v-icon>
            </v-btn>
          </template>
          <span>Sort by company</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" @click="sortToggle">
              <v-icon>mdi-exclamation-thick</v-icon>
            </v-btn>
          </template>
          <span>Sort by priority</span>
        </v-tooltip>
      </v-btn-toggle>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "JmRegisteredJobToolbar",
  data() {
    return {
      totalCards: 13,
      sortList: false,
      styleView: "",
    };
  },
  methods: {
    sortToggle() {
      this.sortList = !this.sortList;
    },
    setGridView() {
      this.styleView = "grid";
      this.$emit("setView", this.styleView);
      console.log(this.styleView + " grid");
    },
    setListView() {
      this.styleView = "list";
      this.$emit("setView", this.styleView);
      console.log(this.styleView + " grid");
    },
  },
};
</script>

<style scoped></style>
