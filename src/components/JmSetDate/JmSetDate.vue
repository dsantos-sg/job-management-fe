<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="dateLabel"
        :placeholder="dateLabel"
        prepend-inner-icon="mdi-calendar"
        outlined
        readonly
        rounded
        v-bind="attrs"
        v-on="on"
        @change="updateWithEmit"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false"> Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(date)"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  name: "JmSetDate",
  props: ["dateLabel"],
  data() {
    return {
      //new Date().toISOString().substr(0, 10)
      date: null,
      modal: false,
    };
  },
  methods: {
    updateWithEmit() {
      this.$emit("getSelectedDate", this.date);
    },
  },
};
</script>

<style scoped></style>
