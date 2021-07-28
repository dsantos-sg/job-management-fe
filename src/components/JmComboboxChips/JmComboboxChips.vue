<template>
  <v-combobox
    v-model="model"
    :items="items"
    :search-input.sync="search"
    :label="comboboxLabel"
    hint="Maximum of 25 tags"
    persistent-hint
    outlined
    rounded
    multiple
    small-chips
    clearable
    class="mb-5"
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            No results matching "<strong>{{ search }}</strong
            >". Press <kbd>enter</kbd> to create a new one
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-combobox>
</template>
<script>
export default {
  name: "JmComboboxChips",
  props: ["comboboxLabel"],
  data: () => ({
    items: [],
    model: [],
    search: null,
  }),

  watch: {
    model(val) {
      if (val.length > 25) {
        this.$nextTick(() => this.model.pop());
      }
    },
  },
};
</script>

<style scoped></style>
